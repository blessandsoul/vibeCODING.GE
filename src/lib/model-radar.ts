import radar from "@/data/model-radar.generated.json";
import { isLandingClonePreview } from "@/lib/landing-clone-preview";

const CATALOG_URL = "https://models.dev/catalog.json";

const TRACKED_LABS = [
  { id: "openai", name: "OpenAI", type: "generation", modelPattern: /^openai\/gpt-(?!image)/i },
  { id: "anthropic", name: "Anthropic", type: "generation", modelPattern: /^anthropic\/claude-/i },
  { id: "google", name: "Google", type: "generation", modelPattern: /^google\/gemini-/i },
  { id: "xai", name: "xAI", type: "generation", modelPattern: /^xai\/grok-/i },
  { id: "mistral", name: "Mistral AI", type: "generation", modelPattern: /^mistral\/mistral-(large|medium|small)/i },
  { id: "deepseek", name: "DeepSeek", type: "generation", modelPattern: /^deepseek\/deepseek-/i },
  { id: "meta", name: "Meta", type: "open", modelPattern: /^meta\/llama-/i },
  { id: "alibaba", name: "Qwen", type: "open", modelPattern: /^alibaba\/qwen/i },
  { id: "cohere", name: "Cohere", type: "generation", modelPattern: /^cohere\/command/i },
  { id: "zhipuai", name: "Z.ai", type: "generation", modelPattern: /^zhipuai\/glm/i },
  { id: "moonshotai", name: "Moonshot AI", type: "generation", modelPattern: /^moonshotai\/kimi/i },
] as const;

export type ModelRadarModel = {
  readonly id: string;
  readonly name: string;
  readonly lab: string;
  readonly category: string;
  readonly releasedAt: string;
  readonly contextWindow: number | null;
  readonly modalities: readonly string[];
  readonly source: string;
  readonly sourceUrl: string;
};

type CatalogModel = {
  readonly id?: string;
  readonly name?: string;
  readonly release_date?: string;
  readonly modalities?: { readonly input?: readonly string[] };
  readonly limit?: { readonly context?: number };
};

function isCurrentModel(model: CatalogModel): model is Required<Pick<CatalogModel, "id" | "name" | "release_date">> & CatalogModel {
  return Boolean(
    model.id &&
      model.name &&
      model.release_date &&
      !/\b(batch|free|preview|guard)\b/i.test(model.name),
  );
}

function selectCurrentModels(models: readonly CatalogModel[]): readonly ModelRadarModel[] {
  return TRACKED_LABS.flatMap((lab) => {
    const selected = models
      .filter(isCurrentModel)
      .filter((model) => lab.modelPattern.test(model.id))
      .sort((first, second) => second.release_date.localeCompare(first.release_date))[0];

    if (!selected) return [];

    return [{
      id: selected.id,
      name: selected.name,
      lab: lab.name,
      category: lab.type,
      releasedAt: selected.release_date,
      contextWindow: Number.isFinite(selected.limit?.context) ? selected.limit?.context ?? null : null,
      modalities: selected.modalities?.input ?? [],
      source: "models.dev public model catalog",
      sourceUrl: "https://models.dev/",
    }];
  });
}

export async function getModelRadar() {
  if (isLandingClonePreview()) {
    return { ...radar, adapter: "MODEL_RADAR_FIXTURE", freshness: { status: "snapshot", cacheSeconds: null } };
  }
  try {
    const response = await fetch(CATALOG_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 21600 },
    });
    const payload = (await response.json()) as { readonly models?: Record<string, CatalogModel> };

    if (!response.ok || !payload.models) {
      throw new Error("Model catalog is unavailable");
    }

    return {
      ...radar,
      generatedAt: new Date().toISOString(),
      source: {
        name: "models.dev public model catalog",
        url: CATALOG_URL,
        documentation: "https://models.dev/",
        catalogModelCount: Object.keys(payload.models).length,
      },
      freshness: { status: "live", cacheSeconds: 21600 },
      models: selectCurrentModels(Object.values(payload.models)),
    };
  } catch {
    return {
      ...radar,
      freshness: { status: "snapshot", cacheSeconds: null },
    };
  }
}
