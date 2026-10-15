import radar from "@/data/model-radar.generated.json";
import { isLandingClonePreview } from "@/lib/landing-clone-preview";
import { createVerifiedFlagshipPolicy, selectFlagshipModels, type SelectionResult } from "./flagship-selector";

const CATALOG_URL = "https://models.dev/catalog.json";
const CACHE_SECONDS = 3600;

export type ModelRadarModel = SelectionResult["models"][number];

function makeRadar(selection: SelectionResult, checkedAt: string, catalogCount?: number) {
  return {
    ...radar,
    generatedAt: selection.status === "live" ? checkedAt : radar.generatedAt,
    checkedAt,
    source: catalogCount === undefined ? radar.source : { ...radar.source, catalogModelCount: catalogCount },
    freshness: { status: selection.status, cacheSeconds: catalogCount === undefined ? null : CACHE_SECONDS },
    selections: selection.selections.map(({ provider, lab, category, approvedFamilies, status, fallback, fallbackReason }) => ({
      provider, lab, category, approvedFamilies, status, fallback, fallbackReason,
    })),
    models: selection.models,
  };
}

export async function getModelRadar() {
  const checkedAt = new Date().toISOString();
  const policy = createVerifiedFlagshipPolicy(checkedAt);
  if (isLandingClonePreview()) {
    return {
      ...radar,
      adapter: "MODEL_RADAR_FIXTURE",
      freshness: { status: "snapshot", cacheSeconds: null },
    };
  }
  try {
    const response = await fetch(CATALOG_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: CACHE_SECONDS },
      signal: AbortSignal.timeout(5000),
    });
    const payload = await response.json() as { readonly models?: unknown };
    if (!response.ok || !payload || typeof payload.models !== "object" || payload.models === null || Array.isArray(payload.models)) {
      throw new Error("Model catalog is unavailable");
    }
    const rows = Object.values(payload.models);
    return makeRadar(selectFlagshipModels(rows, policy, radar.models), checkedAt, rows.length);
  } catch {
    return makeRadar(selectFlagshipModels([], policy, radar.models), checkedAt);
  }
}
