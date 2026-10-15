import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRequire = createRequire(path.join(repoRoot, "package.json"));
const typescriptCandidates = [
  path.join(repoRoot, "node_modules", "typescript", "lib", "typescript.js"),
  path.resolve(repoRoot, "../../../../node_modules/typescript/lib/typescript.js"),
  path.resolve(process.cwd(), "node_modules/typescript/lib/typescript.js"),
  path.resolve(process.cwd(), ".worktrees", "ainow-client-cases-20261015", "website", "node_modules", "typescript", "lib", "typescript.js"),
];

let ts;
for (const candidate of typescriptCandidates) {
  try {
    ts = repoRequire(candidate);
    break;
  } catch {
    // Use the next existing workspace runtime; no package installation is allowed.
  }
}
if (!ts) {
  throw new Error("TypeScript runtime unavailable; use the repository's existing workspace dependency.");
}

function loadRadar(fetchImpl, preview = false) {
  const localRequire = createRequire(path.join(repoRoot, "package.json"));
  const cache = new Map();

  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports;

    const compiledModule = { exports: {} };
    cache.set(filename, compiledModule);
    const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    }).outputText;

    vm.runInNewContext(
      code,
      {
        module: compiledModule,
        exports: compiledModule.exports,
        Date,
        AbortSignal,
        fetch: fetchImpl,
        console,
        require(id) {
          if (id === "@/data/model-radar.generated.json") {
            return JSON.parse(fs.readFileSync(
              path.join(repoRoot, "src", "data", "model-radar.generated.json"),
              "utf8",
            ));
          }
          if (id === "@/lib/landing-clone-preview") {
            return { isLandingClonePreview: () => preview };
          }
          if (id === "@/lib/flagship-selector") {
            return load(path.join(repoRoot, "src", "lib", "flagship-selector.ts"));
          }
          if (id.startsWith(".")) {
            return load(path.resolve(path.dirname(filename), id + ".ts"));
          }
          return localRequire(id);
        },
      },
      { filename },
    );
    return compiledModule.exports;
  }

  return load(path.join(repoRoot, "src", "lib", "model-radar.ts"));
}

function snapshotRows() {
  return JSON.parse(fs.readFileSync(
    path.join(repoRoot, "src", "data", "model-radar.generated.json"),
    "utf8",
  )).models;
}

function catalogRowsFromSnapshot() {
  return snapshotRows().map((model) => ({
    id: model.id,
    name: model.name,
    provider: model.provider,
    family: model.provider === "bytedance" ? "seed" : model.provider === "google" ? "gemini" : model.family,
    release_date: model.releasedAt,
    modalities: { input: model.modalities },
    limit: { context: model.contextWindow },
  }));
}

function catalogPayload(rows) {
  return Object.fromEntries(rows.map((row) => [row.id, row]));
}

test("live catalog keeps all approved flagships ahead of later cheap variants", async () => {
  const rows = [
    ...catalogRowsFromSnapshot(),
    {
      id: "openai/gpt-6.1-sol",
      name: "GPT-6.1 Sol",
      family: "gpt-sol",
      release_date: "2026-10-14",
    },
    {
      id: "anthropic/claude-haiku-5-5",
      name: "Claude Haiku 5.5",
      family: "claude-haiku",
      release_date: "2026-10-14",
    },
    {
      id: "xai/grok-imagine-video-1.5-lite",
      name: "Grok Imagine Video 1.5 Lite",
      family: "grok-imagine",
      release_date: "2026-10-14",
    },
  ];
  const radar = loadRadar(async () => ({
    ok: true,
    json: async () => ({ models: catalogPayload(rows) }),
  }));
  const result = await radar.getModelRadar();

  assert.equal(result.freshness.status, "live");
  assert.equal(result.freshness.cacheSeconds, 3600);
  assert.deepEqual(Array.from(result.models, (model) => model.id), [
    "openai/gpt-6-astra",
    "anthropic/claude-opus-5-5",
    "bytedance-seed/seedance-2.5",
    "google/gemini-4-argon",
    "xai/grok-4.7",
    "mistral/mistral-large-4",
    "deepseek/deepseek-v4-pro-0813",
    "meta/muse-wonder-1.0",
    "alibaba/qwen3.8-max",
    "cohere/command-a-plus-05-2026",
    "zhipuai/glm-5.3",
    "moonshotai/kimi-k3",
  ]);
});

test("upstream failure keeps the verified snapshot and reports snapshot freshness", async () => {
  const radar = loadRadar(async () => {
    throw new Error("upstream unavailable");
  });
  const result = await radar.getModelRadar();

  assert.equal(result.freshness.status, "snapshot");
  assert.equal(result.freshness.cacheSeconds, null);
  assert.equal(result.models.find((model) => model.lab === "OpenAI")?.id, "openai/gpt-6-astra");
  assert.equal(result.models.find((model) => model.lab === "Anthropic")?.id, "anthropic/claude-opus-5-5");
  assert.equal(result.models.find((model) => model.lab === "ByteDance")?.id, "bytedance-seed/seedance-2.5");
});

test("partial live catalog uses per-provider snapshot fallback without losing flagship rows", async () => {
  const rows = catalogRowsFromSnapshot().filter((model) => model.id === "openai/gpt-6-astra");
  const radar = loadRadar(async () => ({
    ok: true,
    json: async () => ({ models: catalogPayload(rows) }),
  }));
  const result = await radar.getModelRadar();

  assert.equal(result.freshness.status, "partial-fallback");
  assert.equal(result.models.length, 12);
  assert.equal(result.models.find((model) => model.provider === "bytedance")?.selectionSource, "snapshot");
  assert.equal(result.models.find((model) => model.provider === "openai")?.selectionSource, "catalog");
});

test("preview guard returns the fixture without contacting the catalog", async () => {
  let fetchCalls = 0;
  const radar = loadRadar(async () => {
    fetchCalls += 1;
    throw new Error("preview must not fetch");
  }, true);
  const result = await radar.getModelRadar();

  assert.equal(fetchCalls, 0);
  assert.equal(result.adapter, "MODEL_RADAR_FIXTURE");
  assert.equal(result.freshness.status, "snapshot");
  assert.equal(result.models.length, 12);
});

