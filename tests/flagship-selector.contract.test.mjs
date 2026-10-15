import assert from "node:assert/strict";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import test from "node:test";

const here = path.dirname(fileURLToPath(import.meta.url));
const candidatePath = path.resolve(here, "../src/lib/flagship-selector.ts");

const policy = {
  asOf: "2026-10-15",
  providers: [
    {
      id: "openai",
      lab: "OpenAI",
      category: "generation",
      families: [
        {
          id: "gpt-astra",
          namePattern: /\bastra\b/i,
          idPattern: /^openai\/gpt-(\d+(?:[.-]\d+)*)-astra$/i,
          versionPattern: /^openai\/gpt-(\d+(?:[.-]\d+)*)-astra$/i,
        },
      ],
    },
    {
      id: "anthropic",
      lab: "Anthropic",
      category: "generation",
      families: [
        {
          id: "claude-fable",
          namePattern: /\bfable\b/i,
          idPattern: /^anthropic\/claude-fable-(\d+(?:[.-]\d+)*)$/i,
          versionPattern: /^anthropic\/claude-fable-(\d+(?:[.-]\d+)*)$/i,
        },
        {
          id: "claude-opus",
          namePattern: /\bopus\b/i,
          idPattern: /^anthropic\/claude-opus-(\d+(?:[.-]\d+)*)$/i,
          versionPattern: /^anthropic\/claude-opus-(\d+(?:[.-]\d+)*)$/i,
        },
      ],
    },
    {
      id: "bytedance",
      lab: "ByteDance",
      category: "video",
      families: [
        {
          id: "seedance",
          namePattern: /\bseedance\b/i,
          idPattern: /^bytedance-seed\/seedance-(\d+(?:[.-]\d+)*)$/i,
          versionPattern: /^bytedance-seed\/seedance-(\d+(?:[.-]\d+)*)$/i,
        },
      ],
    },
    {
      id: "google",
      lab: "Google",
      category: "generation",
      families: [
        {
          id: "gemini-argon",
          namePattern: /\bargon\b/i,
          idPattern: /^google\/gemini-(\d+(?:[.-]\d+)*)-argon$/i,
          versionPattern: /^google\/gemini-(\d+(?:[.-]\d+)*)-argon$/i,
        },
      ],
    },
    {
      id: "xai",
      lab: "xAI",
      category: "generation",
      families: [
        {
          id: "grok",
          namePattern: /\bgrok\b/i,
          idPattern: /^xai\/grok-(\d+(?:[.-]\d+)*)$/i,
          versionPattern: /^xai\/grok-(\d+(?:[.-]\d+)*)$/i,
        },
      ],
    },
  ],
};

const providerPolicy = (...ids) => ({
  ...policy,
  providers: policy.providers.filter((provider) => ids.includes(provider.id)),
});

const catalogModel = (id, name, releaseDate, extra = {}) => ({
  id,
  name,
  release_date: releaseDate,
  modalities: { input: ["text"] },
  limit: { context: 128000 },
  ...extra,
});

const snapshotModel = ({
  provider,
  lab,
  category = "generation",
  family,
  id,
  name,
  releasedAt,
}) => ({
  provider,
  lab,
  category,
  family,
  id,
  name,
  releasedAt,
  contextWindow: 128000,
  modalities: ["text"],
});

const snapshots = [
  snapshotModel({
    provider: "openai",
    lab: "OpenAI",
    family: "gpt-astra",
    id: "openai/gpt-6-astra",
    name: "GPT-6 Astra",
    releasedAt: "2026-09-04",
  }),
  snapshotModel({
    provider: "anthropic",
    lab: "Anthropic",
    family: "claude-opus",
    id: "anthropic/claude-opus-5-5",
    name: "Claude Opus 5.5",
    releasedAt: "2026-09-22",
  }),
  snapshotModel({
    provider: "bytedance",
    lab: "ByteDance",
    category: "video",
    family: "seedance",
    id: "bytedance-seed/seedance-2.5",
    name: "Seedance 2.5",
    releasedAt: "2026-07-31",
  }),
  snapshotModel({
    provider: "google",
    lab: "Google",
    family: "gemini-argon",
    id: "google/gemini-4-argon",
    name: "Gemini 4 Argon",
    releasedAt: "2026-10-13",
  }),
  snapshotModel({
    provider: "xai",
    lab: "xAI",
    family: "grok",
    id: "xai/grok-4.7",
    name: "Grok 4.7",
    releasedAt: "2026-09-21",
  }),
];

const baseCatalog = [
  catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-09-04"),
  catalogModel("openai/gpt-6-1-sol", "GPT-6.1 Sol", "2026-09-30"),
  catalogModel("openai/gpt-6-lite", "GPT-6 Lite", "2026-10-01"),
  catalogModel("openai/gpt-image-2", "GPT Image 2", "2026-10-02", {
    modalities: { input: ["image"] },
  }),
  catalogModel(
    "anthropic/claude-fable-5-1",
    "Claude Fable 5.1",
    "2026-09-01",
  ),
  catalogModel(
    "anthropic/claude-opus-5-5",
    "Claude Opus 5.5",
    "2026-09-22",
  ),
  catalogModel(
    "anthropic/claude-haiku-5-5",
    "Claude Haiku 5.5",
    "2026-10-01",
  ),
  catalogModel(
    "bytedance-seed/seedance-2.5",
    "Seedance 2.5",
    "2026-07-31",
    { modalities: { input: ["text", "image", "video"] } },
  ),
  catalogModel("google/gemini-4-argon", "Gemini 4 Argon", "2026-10-13"),
  catalogModel("google/gemini-4.1-flash", "Gemini 4.1 Flash", "2026-10-14"),
  catalogModel("xai/grok-4.7", "Grok 4.7", "2026-09-21"),
  catalogModel("xai/grok-4.8-mini", "Grok 4.8 Mini", "2026-10-14"),
  catalogModel("bytedance-seed/seedance-2.5-preview", "Seedance 2.5 Preview", "2026-10-14"),
  catalogModel("bytedance-seed/seedance-2.5-image", "Seedance 2.5 Image", "2026-10-14"),
  catalogModel("bytedance-seed/seedance-2.5-video", "Seedance 2.5 Video", "2026-10-14"),
];

let candidate;
try {
  candidate = await import(pathToFileURL(candidatePath).href);
} catch (error) {
  if (error?.code !== "ERR_MODULE_NOT_FOUND") throw error;
  candidate = null;
}

// This keeps the RED run as assertion failures rather than a module-loading
// error. Once flagship-selector.ts exists, the real implementation is used.
const selectFlagshipModels = candidate?.selectFlagshipModels ?? (() => ({
  status: "unavailable",
  models: [],
  selections: [],
}));

const selectionSummary = (result) => result.selections.map((selection) => ({
  provider: selection.provider,
  status: selection.status,
  fallback: selection.fallback,
  id: selection.model?.id ?? null,
  source: selection.model?.selectionSource ?? null,
}));

test("selects only approved flagship families and keeps ByteDance separate from xAI", () => {
  const result = selectFlagshipModels(baseCatalog, policy, snapshots);

  assert.equal(result.status, "live");
  assert.deepEqual(result.models.map((model) => model.id), [
    "openai/gpt-6-astra",
    "anthropic/claude-opus-5-5",
    "bytedance-seed/seedance-2.5",
    "google/gemini-4-argon",
    "xai/grok-4.7",
  ]);
  assert.equal(result.models.find((model) => model.id === "bytedance-seed/seedance-2.5").lab, "ByteDance");
  assert.equal(result.models.find((model) => model.id === "bytedance-seed/seedance-2.5").provider, "bytedance");
  assert.equal(result.models.find((model) => model.id === "xai/grok-4.7").provider, "xai");
  assert.equal(result.models.find((model) => model.id === "xai/grok-4.7").family, "grok");
  assert.ok(result.models.every((model) => model.selectionSource === "catalog"));
  assert.ok(!result.models.some((model) => /(?:^|[-/])(sol|lite|haiku|image|video|flash|mini)(?:$|[-.])/i.test(model.id)));
});

test("verified default policy admits the curated families for every tracked lab", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");

  const verifiedRows = [
    catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-09-04", { family: "gpt-astra" }),
    catalogModel("anthropic/claude-fable-5-1", "Claude Fable 5.1", "2026-09-01", { family: "claude-fable" }),
    catalogModel("anthropic/claude-opus-5-5", "Claude Opus 5.5", "2026-09-22", { family: "claude-opus" }),
    catalogModel("bytedance-seed/seedance-2.5", "Seedance 2.5", "2026-07-31", { family: "seed" }),
    catalogModel("google/gemini-4-argon", "Gemini 4 Argon", "2026-10-13", { family: "gemini" }),
    catalogModel("xai/grok-4.7", "Grok 4.7", "2026-09-21", { family: "grok" }),
    catalogModel("mistral/mistral-large-4", "Mistral Large 4", "2026-10-06", { family: "mistral-large" }),
    catalogModel("deepseek/deepseek-v4-pro-0813", "DeepSeek V4 Pro 0813", "2026-08-12", { family: "deepseek-thinking" }),
    catalogModel("meta/muse-wonder-1.0", "Muse Wonder", "2026-10-12", { family: "muse" }),
    catalogModel("alibaba/qwen3.8-max", "Qwen3.8 Max", "2026-08-03", { family: "qwen" }),
    catalogModel("cohere/command-a-plus-05-2026", "Command A Plus", "2026-05-20", { family: "command-a" }),
    catalogModel("zhipuai/glm-5.3", "GLM-5.3", "2026-08-14", { family: "glm" }),
    catalogModel("moonshotai/kimi-k3", "Kimi K3", "2026-07-16", { family: "kimi-k3" }),
  ];
  const verifiedSnapshot = verifiedRows.map((row) => ({
    provider: actualPolicy.providers.find((provider) => row.id.startsWith(`${provider.id}/`))?.id ?? "",
    family: row.family,
    id: row.id,
    name: row.name,
    releasedAt: row.release_date,
  }));

  const result = selectFlagshipModels(verifiedRows, actualPolicy, verifiedSnapshot);

  assert.equal(result.status, "live");
  assert.deepEqual(result.models.map((model) => model.id), [
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

test("classifies Meta Muse Wonder and Qwen Max as generation models", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const generationPolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => ["meta", "alibaba"].includes(provider.id)),
  };
  const result = selectFlagshipModels(
    [
      catalogModel("meta/muse-wonder-1.0", "Muse Wonder", "2026-10-12", { family: "muse" }),
      catalogModel("alibaba/qwen3.8-max", "Qwen3.8 Max", "2026-08-03", { family: "qwen" }),
    ],
    generationPolicy,
    [],
  );

  assert.deepEqual(result.models.map((model) => [model.id, model.category]), [
    ["meta/muse-wonder-1.0", "generation"],
    ["alibaba/qwen3.8-max", "generation"],
  ]);
});

test("compares Cohere MM-YYYY versions by calendar order, not numeric month first", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.("2028-01-01");
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const coherePolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => provider.id === "cohere"),
  };
  const result = selectFlagshipModels(
    [
      catalogModel("cohere/command-a-plus-11-2026", "Command A Plus", "2026-11-20", { family: "command-a" }),
      catalogModel("cohere/command-a-plus-05-2027", "Command A Plus", "2027-05-20", { family: "command-a" }),
    ],
    coherePolicy,
    [],
  );

  assert.deepEqual(result.models.map((model) => model.id), ["cohere/command-a-plus-05-2027"]);
});

test("allows approved Kimi K family updates while rejecting preview suffixes", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const moonshotPolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => provider.id === "moonshotai"),
  };
  const result = selectFlagshipModels(
    [
      catalogModel("moonshotai/kimi-k4", "Kimi K4", "2026-10-10", { family: "kimi-k4" }),
      catalogModel("moonshotai/kimi-k4-preview", "Kimi K4 Preview", "2026-10-14", { family: "kimi-k4" }),
    ],
    moonshotPolicy,
    [],
  );

  assert.deepEqual(result.models.map((model) => model.id), ["moonshotai/kimi-k4"]);
});

test("accepts strict DeepSeek Pro IDs with or without a dated suffix", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const deepseekPolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => provider.id === "deepseek"),
  };
  const result = selectFlagshipModels(
    [
      catalogModel("deepseek/deepseek-v4-pro-0813", "DeepSeek V4 Pro 0813", "2026-08-12", { family: "deepseek-thinking" }),
      catalogModel("deepseek/deepseek-v4-pro", "DeepSeek V4 Pro", "2026-08-20", { family: "deepseek-thinking" }),
      catalogModel("deepseek/deepseek-v4-flash", "DeepSeek V4 Flash", "2026-10-01", { family: "deepseek-thinking" }),
    ],
    deepseekPolicy,
    [],
  );

  assert.deepEqual(result.models.map((model) => model.id), ["deepseek/deepseek-v4-pro"]);
});

test("keeps a newer approved Opus snapshot over an older live Fable family", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const anthropicPolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => provider.id === "anthropic"),
  };
  const result = selectFlagshipModels(
    [catalogModel("anthropic/claude-fable-5-1", "Claude Fable 5.1", "2026-09-01", { family: "claude-fable" })],
    anthropicPolicy,
    [snapshotModel({
      provider: "anthropic",
      lab: "Anthropic",
      family: "claude-opus",
      id: "anthropic/claude-opus-5-5",
      name: "Claude Opus 5.5",
      releasedAt: "2026-09-22",
    })],
  );

  assert.equal(result.status, "snapshot");
  assert.equal(result.selections[0].status, "snapshot");
  assert.equal(result.selections[0].fallbackReason, "catalog-older-than-snapshot");
  assert.equal(result.models[0].id, "anthropic/claude-opus-5-5");
});

test("fails closed when a snapshot row has an unapproved family name or cheap marker", () => {
  const actualPolicy = candidate?.createVerifiedFlagshipPolicy?.(policy.asOf);
  assert.ok(actualPolicy, "the shared selector must expose the verified policy factory");
  const openAiPolicy = {
    ...actualPolicy,
    providers: actualPolicy.providers.filter((provider) => provider.id === "openai"),
  };
  const result = selectFlagshipModels(
    [],
    openAiPolicy,
    [snapshotModel({
      provider: "openai",
      lab: "OpenAI",
      family: "gpt-astra",
      id: "openai/gpt-6-astra",
      name: "GPT-6 Lite",
      releasedAt: "2026-09-04",
    })],
  );

  assert.equal(result.status, "unavailable");
  assert.equal(result.selections[0].status, "missing");
  assert.equal(result.selections[0].fallbackReason, "no-known-snapshot");
  assert.equal(result.models.length, 0);
});

test("uses semantic version within approved families before release date", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("openai/gpt-6.1-astra", "GPT-6.1 Astra", "2026-09-05"),
      catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-10-14"),
      catalogModel("anthropic/claude-fable-6", "Claude Fable 6", "2026-09-05"),
      catalogModel("anthropic/claude-opus-5-5", "Claude Opus 5.5", "2026-09-22"),
    ],
    providerPolicy("openai", "anthropic"),
    [],
  );

  assert.deepEqual(result.models.map((model) => model.id), [
    "openai/gpt-6.1-astra",
    "anthropic/claude-opus-5-5",
  ]);
});

test("pools live and snapshot rows per family before choosing the latest family release", () => {
  const anthropicPolicy = {
    ...providerPolicy("anthropic"),
    asOf: "2027-01-01",
  };
  const catalogRows = [
    catalogModel("anthropic/claude-fable-5-2", "Claude Fable 5.2", "2026-11-01"),
    catalogModel("anthropic/claude-opus-5-4", "Claude Opus 5.4", "2026-12-01"),
  ];
  const snapshotRows = [snapshotModel({
    provider: "anthropic",
    lab: "Anthropic",
    family: "claude-opus",
    id: "anthropic/claude-opus-5-5",
    name: "Claude Opus 5.5",
    releasedAt: "2026-09-22",
  })];

  const forward = selectFlagshipModels(catalogRows, anthropicPolicy, snapshotRows);
  const reverse = selectFlagshipModels([...catalogRows].reverse(), anthropicPolicy, snapshotRows);

  for (const result of [forward, reverse]) {
    assert.equal(result.status, "live");
    assert.equal(result.selections[0].status, "live");
    assert.equal(result.selections[0].fallback, false);
    assert.equal(result.models[0].id, "anthropic/claude-fable-5-2");
    assert.equal(result.models[0].selectionSource, "catalog");
  }
  assert.deepEqual(selectionSummary(forward), selectionSummary(reverse));

  const equalCatalogAndSnapshot = selectFlagshipModels(
    [catalogRows[0]],
    anthropicPolicy,
    [snapshotModel({
      provider: "anthropic",
      lab: "Anthropic",
      family: "claude-fable",
      id: "anthropic/claude-fable-5-2",
      name: "Claude Fable 5.2",
      releasedAt: "2026-11-01",
    })],
  );
  assert.equal(equalCatalogAndSnapshot.selections[0].status, "live");
  assert.equal(equalCatalogAndSnapshot.selections[0].fallback, false);
  assert.equal(equalCatalogAndSnapshot.models[0].selectionSource, "catalog");
});

test("does not give Fable blanket priority over a newer approved Opus family", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("anthropic/claude-fable-5-1", "Claude Fable 5.1", "2026-09-01"),
      catalogModel("anthropic/claude-opus-5-5", "Claude Opus 5.5", "2026-09-22"),
    ],
    providerPolicy("anthropic"),
    [],
  );

  assert.deepEqual(result.models.map((model) => model.id), ["anthropic/claude-opus-5-5"]);
});

test("is invariant to catalog order when versions and dates tie", () => {
  const rows = [
    catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-09-04"),
    catalogModel("openai/gpt-6.0-astra", "GPT-6 Astra", "2026-09-04"),
    catalogModel("anthropic/claude-fable-5-1", "Claude Fable 5.1", "2026-09-01"),
    catalogModel("anthropic/claude-opus-5-5", "Claude Opus 5.5", "2026-09-22"),
    catalogModel("bytedance-seed/seedance-2.5", "Seedance 2.5", "2026-07-31"),
    catalogModel("google/gemini-4-argon", "Gemini 4 Argon", "2026-10-13"),
    catalogModel("xai/grok-4.7", "Grok 4.7", "2026-09-21"),
  ];

  const first = selectFlagshipModels(rows, policy, snapshots);
  const second = selectFlagshipModels([...rows].reverse(), policy, snapshots);

  assert.deepEqual(selectionSummary(first), selectionSummary(second));
  assert.deepEqual(first.models.map((model) => model.id), second.models.map((model) => model.id));
});

test("rejects malformed and future catalog rows, then uses known snapshots", () => {
  const result = selectFlagshipModels(
    [
      null,
      {},
      { id: "openai/gpt-6-astra", name: "GPT-6 Astra" },
      catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-10-16"),
      catalogModel("anthropic/claude-opus-5-5", "Claude Opus 5.5", "not-a-date"),
      catalogModel("bytedance-seed/seedance-2.5", "Seedance 2.5", "2027-01-01"),
      catalogModel("google/gemini-4-argon", "Gemini 4 Argon", "2026-10-13"),
      catalogModel("xai/grok-4.7", "Grok 4.7", "2026-09-21"),
    ],
    policy,
    snapshots,
  );

  assert.equal(result.status, "partial-fallback");
  assert.deepEqual(selectionSummary(result), [
    { provider: "openai", status: "snapshot", fallback: true, id: "openai/gpt-6-astra", source: "snapshot" },
    { provider: "anthropic", status: "snapshot", fallback: true, id: "anthropic/claude-opus-5-5", source: "snapshot" },
    { provider: "bytedance", status: "snapshot", fallback: true, id: "bytedance-seed/seedance-2.5", source: "snapshot" },
    { provider: "google", status: "live", fallback: false, id: "google/gemini-4-argon", source: "catalog" },
    { provider: "xai", status: "live", fallback: false, id: "xai/grok-4.7", source: "catalog" },
  ]);
});

test("reports per-provider fallback status when live data is partial", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-09-04"),
      catalogModel("xai/grok-4.7", "Grok 4.7", "2026-09-21"),
    ],
    policy,
    snapshots.filter((snapshot) => ["anthropic", "bytedance"].includes(snapshot.provider)),
  );

  assert.equal(result.status, "partial-fallback");
  assert.deepEqual(selectionSummary(result), [
    { provider: "openai", status: "live", fallback: false, id: "openai/gpt-6-astra", source: "catalog" },
    { provider: "anthropic", status: "snapshot", fallback: true, id: "anthropic/claude-opus-5-5", source: "snapshot" },
    { provider: "bytedance", status: "snapshot", fallback: true, id: "bytedance-seed/seedance-2.5", source: "snapshot" },
    { provider: "google", status: "missing", fallback: true, id: null, source: null },
    { provider: "xai", status: "live", fallback: false, id: "xai/grok-4.7", source: "catalog" },
  ]);
  assert.ok(result.selections.find((selection) => selection.provider === "google").fallback);
});

test("never claims live data for an empty or entirely unusable catalog", () => {
  const result = selectFlagshipModels(
    [
      null,
      { id: "xai/grok-4.7", name: "Grok 4.7", release_date: "2099-01-01" },
      { id: "anthropic/claude-opus-5-5", name: "Claude Opus 5.5", release_date: "" },
    ],
    policy,
    [],
  );

  assert.equal(result.status, "unavailable");
  assert.equal(result.models.length, 0);
  assert.equal(result.selections.length, policy.providers.length);
  assert.ok(result.selections.every((selection) => selection.status === "missing" && selection.fallback));
});

test("does not turn a renamed xAI Grok row into a ByteDance Seedance selection", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("xai/grok-4.7", "Seedance 2.5", "2026-09-21"),
      catalogModel("bytedance-seed/seedance-2.5", "Grok 4.7", "2026-07-31"),
    ],
    providerPolicy("bytedance", "xai"),
    [],
  );

  assert.equal(result.selections.find((selection) => selection.provider === "bytedance").status, "missing");
  assert.equal(result.selections.find((selection) => selection.provider === "xai").status, "missing");
  assert.equal(result.models.length, 0);
});

test("normalizes only valid catalog metadata without making malformed fields fatal", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("openai/gpt-6-astra", "GPT-6 Astra", "2026-09-04", {
        modalities: { input: ["text", 7, null] },
        limit: { context: "not-a-number" },
      }),
    ],
    providerPolicy("openai"),
    [],
  );

  assert.equal(result.status, "live");
  assert.deepEqual(result.models[0].modalities, ["text"]);
  assert.equal(result.models[0].contextWindow, null);
});

test("uses a stable snapshot when a provider has only an unapproved newer family", () => {
  const result = selectFlagshipModels(
    [
      catalogModel("openai/gpt-6-1-sol", "GPT-6.1 Sol", "2026-10-01"),
      catalogModel("openai/gpt-6-lite", "GPT-6 Lite", "2026-10-02"),
    ],
    providerPolicy("openai"),
    [snapshots[0]],
  );

  assert.equal(result.status, "snapshot");
  assert.equal(result.selections[0].status, "snapshot");
  assert.equal(result.selections[0].fallbackReason, "catalog-family-missing");
  assert.equal(result.models[0].id, "openai/gpt-6-astra");
});

test("the contract remains pure and does not mutate catalog or snapshot inputs", () => {
  const catalog = baseCatalog.map((row) => ({
    ...row,
    modalities: row.modalities ? { input: [...row.modalities.input] } : row.modalities,
    limit: row.limit ? { ...row.limit } : row.limit,
  }));
  const snapshot = snapshots.map((row) => ({ ...row, modalities: [...row.modalities] }));
  const catalogBefore = structuredClone(catalog);
  const snapshotBefore = structuredClone(snapshot);

  selectFlagshipModels(catalog, policy, snapshot);

  assert.deepEqual(catalog, catalogBefore);
  assert.deepEqual(snapshot, snapshotBefore);
});


