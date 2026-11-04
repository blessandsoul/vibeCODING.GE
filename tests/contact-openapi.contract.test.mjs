import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const testDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(testDir, "..", "src");

function load(file, stubs = {}) {
  const path = resolve(root, file);
  const code = ts.transpileModule(readFileSync(path, "utf8"), {
    fileName: path,
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const local = (name) => {
    if (name in stubs) return stubs[name];
    if (name.startsWith("@/")) return load(name.slice(2) + ".ts", stubs);
    if (name.startsWith(".")) return load(resolve(dirname(path), name) + (name.endsWith(".ts") ? "" : ".ts"), stubs);
    return require(name);
  };
  new Function("require", "module", "exports", code)(local, module, module.exports);
  return module.exports;
}

const site = load("features/contact/lib/contact-context.ts").CONTACT_SITE;
const route = load("app/openapi.json/route.ts", {
  "@/config/site": { SITE: { baseUrl: "https://" + site } },
  "@/lib/constants/app.constants": { CONTACT_EMAIL: "CONTACT@AINOW.GE" },
  "@/features/product-pages/machine": { machineJsonResponse: (value) => Response.json(value) },
});
const response = await Promise.resolve(route.GET());
const document = JSON.parse(await response.text());
const contact = document.paths["/api/contact"].post;
const ref = contact.requestBody.content["application/json"].schema.$ref;
const schemaName = ref.split("/").pop();
const schema = document.components.schemas[schemaName];

test("published OpenAPI advertises the qualified contact contract", () => {
  assert.equal(contact.requestBody.required, true);
  const required = new Set(schema.required);
  for (const field of ["name", "message", "contactPreference", "contactConfirmed", "turnstileToken"]) {
    assert.equal(required.has(field), true, field);
  }
  assert.equal(required.has("phone"), false);
  assert.equal(schema.properties.name.minLength, 2);
  assert.equal(schema.properties.name.maxLength, 120);
  assert.match(schema.properties.name.description, /letter/i);
  assert.equal(schema.properties.company.maxLength, 120);
  assert.equal(schema.properties.product.maxLength, 120);
  assert.equal(schema.properties.phone.maxLength, 20);
  assert.equal(schema.properties.phone.minLength, 9);
  assert.match(schema.properties.phone.pattern, /\\d/);
  assert.match(schema.properties.phone.description, /nine to fifteen digits/i);
  assert.equal(schema.properties.email.format, "email");
  assert.equal(schema.properties.email.maxLength, 254);
  assert.equal(schema.properties.message.minLength, 8);
  assert.equal(schema.properties.message.maxLength, 1800);
  assert.match(schema.properties.message.description, /four Unicode letters or digits/i);
  assert.match(schema.properties.message.description, /4096/);
  assert.deepEqual(schema.properties.contactPreference.enum, ["whatsapp", "sms", "call", "email"]);
  assert.equal(schema.properties.contactConfirmed.const, true);
  assert.equal(schema.properties.turnstileToken.minLength, 1);
  assert.equal(schema.properties.turnstileToken.maxLength, 2048);
  assert.match(schema.properties.turnstileToken.description, /not persisted/i);
  for (const field of ["source", "sourcePath", "landingPath", "referrerHost", "paidClick", "utmSource", "utmMedium", "utmCampaign", "utmContent", "utmTerm"]) {
    assert.ok(schema.properties[field], field);
  }
  assert.equal(schema.properties.source.maxLength, 100);
  assert.equal(schema.properties.sourcePath.maxLength, 200);
  assert.equal(schema.properties.landingPath.maxLength, 200);
  assert.equal(schema.properties.referrerHost.maxLength, 200);
  for (const field of ["utmSource", "utmMedium", "utmCampaign", "utmContent", "utmTerm"]) {
    assert.equal(schema.properties[field].maxLength, 100, field);
    assert.equal("pattern" in schema.properties[field], false, field + " must allow Unicode values");
  }
  for (const field of Object.keys(schema.properties)) {
    assert.equal(field.includes("_"), false, "runtime metadata is camelCase: " + field);
  }
  assert.ok(Array.isArray(schema.oneOf) && schema.oneOf.length === 4);
});

test("a qualified sample matches the documented required fields while phone-only fails", () => {
  const qualified = {
    name: "Nino Example",
    company: "Example shop",
    phone: "+995 555 12 34 56",
    message: "Please help us answer product questions.",
    product: "Product demo",
    contactPreference: "whatsapp",
    contactConfirmed: true,
    turnstileToken: "synthetic-token",
    source: "contact-page",
    sourcePath: "/ru/contact",
    landingPath: "/en/blog/first",
    referrerHost: "www.google.com",
    paidClick: true,
    utmSource: "ქართული",
    utmMedium: "social",
  };
  const required = new Set(schema.required);
  const hasRequired = (value) => [...required].every((field) => value[field] !== undefined);
  assert.equal(hasRequired(qualified), true);
  assert.equal(hasRequired({ phone: qualified.phone }), false);
  assert.equal(schema.oneOf.some((branch) => branch.required?.includes("phone")), true);
});

test("contact docs describe challenge failure and no automatic CAPTCHA solving", () => {
  assert.ok(contact.responses["400"]);
  assert.ok(contact.responses["403"]);
  assert.match(contact.responses["403"].description, /missing|invalid/i);
  assert.match(contact.description, /Turnstile/i);
  assert.match(contact.description, /does not solve CAPTCHA automatically/i);
});


test("active contact docs do not inherit a disabled preview adapter claim", () => {
 assert.equal(contact.responses["503"],undefined);
 assert.equal(document.info.description.includes("lead and contact POST adapters are intentionally disabled"),false);
 assert.ok(document.paths["/api/lead"].post.responses["503"],"legacy lead adapter remains disabled");
 assert.equal(document.servers[0].description,"Production");
});
