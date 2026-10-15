/**
 * Pure flagship-family selector.
 *
 * The selector intentionally knows nothing about fetch, caching, React, or a
 * provider SDK.  A caller supplies an explicit provider/family policy and a
 * known-good snapshot.  This keeps catalog availability separate from the
 * policy decision and makes a partial fallback observable per provider.
 */

export type CatalogModel = {
  readonly id?: unknown;
  readonly name?: unknown;
  readonly family?: unknown;
  readonly release_date?: unknown;
  readonly modalities?: unknown;
  readonly limit?: unknown;
};

export type FlagshipFamilyPolicy = {
  readonly id: string;
  readonly idPattern: RegExp;
  readonly versionPattern: RegExp;
  readonly versionGroup?: number;
  readonly versionFormat?: "semantic" | "calendar-mm-yyyy";
  readonly namePattern?: RegExp;
  readonly familyPattern?: RegExp;
};

export type FlagshipProviderPolicy = {
  readonly id: string;
  readonly lab: string;
  readonly category: string;
  readonly families: readonly FlagshipFamilyPolicy[];
};

export type FlagshipPolicy = {
  readonly asOf: string;
  readonly providers: readonly FlagshipProviderPolicy[];
};

export type SnapshotModel = {
  readonly provider: string;
  readonly lab?: string;
  readonly category?: string;
  readonly family: string;
  readonly id: string;
  readonly name: string;
  readonly releasedAt: string;
  readonly contextWindow?: number | null;
  readonly modalities?: readonly string[];
};

export type SelectedModel = {
  readonly provider: string;
  readonly lab: string;
  readonly category: string;
  readonly family: string;
  readonly id: string;
  readonly name: string;
  readonly releasedAt: string;
  readonly contextWindow: number | null;
  readonly modalities: readonly string[];
  readonly source: "models.dev public model catalog" | "known snapshot";
  readonly sourceUrl: "https://models.dev/";
  readonly selectionSource: "catalog" | "snapshot";
};

export type SelectionStatus = "live" | "snapshot" | "missing";

export type FallbackReason =
  | "catalog-family-missing"
  | "catalog-candidate-invalid"
  | "catalog-older-than-snapshot"
  | "no-known-snapshot"
  | null;

export type ProviderSelection = {
  readonly provider: string;
  readonly lab: string;
  readonly category: string;
  readonly approvedFamilies: readonly string[];
  readonly status: SelectionStatus;
  readonly fallback: boolean;
  readonly fallbackReason: FallbackReason;
  readonly model: SelectedModel | null;
};

export type SelectionResult = {
  readonly status: "live" | "snapshot" | "partial-fallback" | "unavailable";
  readonly selections: readonly ProviderSelection[];
  readonly models: readonly SelectedModel[];
};

type ParsedRelease = {
  readonly raw: string;
  readonly day: string;
  readonly timestamp: number;
};

type Version = readonly number[];

type Candidate = {
  readonly provider: FlagshipProviderPolicy;
  readonly family: FlagshipFamilyPolicy;
  readonly version: Version;
  readonly release: ParsedRelease;
  readonly model: SelectedModel;
};

const VERIFIED_FLAGSHIP_PROVIDERS: readonly FlagshipProviderPolicy[] = [
  {
    id: "openai",
    lab: "OpenAI",
    category: "generation",
    families: [
      {
        id: "gpt-astra",
        familyPattern: /^gpt-astra$/i,
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
        familyPattern: /^claude-fable$/i,
        namePattern: /\bfable\b/i,
        idPattern: /^anthropic\/claude-fable-(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^anthropic\/claude-fable-(\d+(?:[.-]\d+)*)$/i,
      },
      {
        id: "claude-opus",
        familyPattern: /^claude-opus$/i,
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
        familyPattern: /^seed$/i,
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
        familyPattern: /^gemini$/i,
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
        familyPattern: /^grok$/i,
        namePattern: /\bgrok\b/i,
        idPattern: /^xai\/grok-(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^xai\/grok-(\d+(?:[.-]\d+)*)$/i,
      },
    ],
  },
  {
    id: "mistral",
    lab: "Mistral AI",
    category: "generation",
    families: [
      {
        id: "mistral-large",
        familyPattern: /^mistral-large$/i,
        namePattern: /\bmistral\s+large\b/i,
        idPattern: /^mistral\/mistral-large-(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^mistral\/mistral-large-(\d+(?:[.-]\d+)*)$/i,
      },
    ],
  },
  {
    id: "deepseek",
    lab: "DeepSeek",
    category: "generation",
    families: [
      {
        id: "deepseek-thinking",
        familyPattern: /^deepseek-thinking$/i,
        namePattern: /\bdeepseek\b.*\bpro\b/i,
    idPattern: /^deepseek\/deepseek-v(\d+(?:[.-]\d+)*)-pro(?:-\d+)?$/i,
    versionPattern: /^deepseek\/deepseek-v(\d+(?:[.-]\d+)*)-pro(?:-\d+)?$/i,
      },
    ],
  },
  {
    id: "meta",
    lab: "Meta",
    category: "generation",
    families: [
      {
        id: "muse",
        familyPattern: /^muse$/i,
        namePattern: /\bmuse\s+wonder\b/i,
        idPattern: /^meta\/muse-wonder-(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^meta\/muse-wonder-(\d+(?:[.-]\d+)*)$/i,
      },
    ],
  },
  {
    id: "alibaba",
    lab: "Qwen",
    category: "generation",
    families: [
      {
        id: "qwen",
        familyPattern: /^qwen$/i,
        namePattern: /\bqwen.*\bmax\b/i,
        idPattern: /^alibaba\/qwen(\d+(?:[.-]\d+)*)-max$/i,
        versionPattern: /^alibaba\/qwen(\d+(?:[.-]\d+)*)-max$/i,
      },
    ],
  },
  {
    id: "cohere",
    lab: "Cohere",
    category: "generation",
    families: [
      {
        id: "command-a",
        familyPattern: /^command-a$/i,
        namePattern: /\bcommand\s+a\s+plus\b/i,
    idPattern: /^cohere\/command-a-plus-(\d{2})-(\d{4})$/i,
    versionPattern: /^cohere\/command-a-plus-(\d{2})-(\d{4})$/i,
    versionFormat: "calendar-mm-yyyy",
      },
    ],
  },
  {
    id: "zhipuai",
    lab: "Z.ai",
    category: "generation",
    families: [
      {
        id: "glm",
        familyPattern: /^glm$/i,
        namePattern: /^glm\b/i,
        idPattern: /^zhipuai\/glm-(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^zhipuai\/glm-(\d+(?:[.-]\d+)*)$/i,
      },
    ],
  },
  {
    id: "moonshotai",
    lab: "Moonshot AI",
    category: "generation",
    families: [
      {
        id: "kimi-k3",
        familyPattern: /^kimi-k\d+(?:[.-]\d+)*$/i,
        namePattern: /\bkimi\s+k\d+(?:\.\d+)*\b/i,
        idPattern: /^moonshotai\/kimi-k(\d+(?:[.-]\d+)*)$/i,
        versionPattern: /^moonshotai\/kimi-k(\d+(?:[.-]\d+)*)$/i,
      },
    ],
  },
];

/**
 * The verified first-party policy for the current landing release.
 *
 * `asOf` is supplied by the caller so the policy remains deterministic in
 * tests and does not silently treat a future catalog row as available.
 */
export function createVerifiedFlagshipPolicy(asOf: string): FlagshipPolicy {
  return {
    asOf,
    providers: VERIFIED_FLAGSHIP_PROVIDERS,
  };
}

export const VERIFIED_FLAGSHIP_FAMILIES = VERIFIED_FLAGSHIP_PROVIDERS;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function text(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function stableRegExp(pattern: RegExp): RegExp {
  return new RegExp(pattern.source, pattern.flags.replace(/[gy]/g, ""));
}

function matches(pattern: RegExp | undefined, value: string): boolean {
  return pattern ? stableRegExp(pattern).test(value) : true;
}

function parseAsOf(value: unknown): ParsedRelease | null {
  const raw = text(value);
  if (!raw) return null;
  return parseRelease(raw, "9999-12-31");
}

function parseRelease(value: unknown, asOfDay: string): ParsedRelease | null {
  const raw = text(value);
  if (!raw) return null;

  const match = /^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(raw);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const timestamp = Date.parse(raw);
  if (!Number.isFinite(timestamp)) return null;

  const canonicalTimestamp = Date.UTC(year, month - 1, day);
  const date = new Date(canonicalTimestamp);
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  const releaseDay = `${match[1]}-${match[2]}-${match[3]}`;
  if (releaseDay > asOfDay) return null;

  return { raw, day: releaseDay, timestamp };
}

function parseVersion(
  family: FlagshipFamilyPolicy,
  value: string,
): Version | null {
  const match = stableRegExp(family.versionPattern).exec(value);
  if (!match) return null;

  const group = family.versionGroup ?? 1;
  if (family.versionFormat === "calendar-mm-yyyy") {
    const month = match[group];
    const year = match[group + 1];
    if (!/^\d{1,2}$/.test(month ?? "") || !/^\d{4}$/.test(year ?? "")) {
      return null;
    }
    const monthNumber = Number(month);
    if (monthNumber < 1 || monthNumber > 12) return null;
    return [Number(year), monthNumber];
  }

  const raw = match[group] ?? match[0];
  const parts = raw.replace(/-/g, ".").split(".");
  if (parts.length === 0 || parts.some((part) => !/^\d+$/.test(part))) {
    return null;
  }

  return parts.map(Number);
}

function compareVersions(first: Version, second: Version): number {
  const length = Math.max(first.length, second.length);
  for (let index = 0; index < length; index += 1) {
    const left = first[index] ?? 0;
    const right = second[index] ?? 0;
    if (left !== right) return left - right;
  }
  return 0;
}

function compareText(first: string, second: string): number {
  if (first === second) return 0;
  return first < second ? -1 : 1;
}

function compareCandidates(first: Candidate, second: Candidate): number {
  const versionOrder = compareVersions(first.version, second.version);
  if (versionOrder !== 0) return versionOrder;

  // Release time is only a tie-breaker after semantic version selection. It
  // represents verified availability, not a global ranking signal.
  if (first.release.timestamp !== second.release.timestamp) {
    return first.release.timestamp - second.release.timestamp;
  }

  const familyOrder = compareText(first.family.id, second.family.id);
  if (familyOrder !== 0) return familyOrder;
  return compareText(first.model.id, second.model.id);
}

function normalizeModalities(value: unknown): readonly string[] {
  if (!isRecord(value) || !Array.isArray(value.input)) return [];
  return value.input.filter((item): item is string => typeof item === "string");
}

function normalizeContext(value: unknown): number | null {
  if (!isRecord(value) || typeof value.context !== "number") return null;
  return Number.isFinite(value.context) ? value.context : null;
}

function isApprovedModelName(
  family: FlagshipFamilyPolicy,
  name: string,
): boolean {
  if (!matches(family.namePattern, name)) return false;
  return !/\b(batch|free|preview|guard|lite|sol|haiku|image|flash|mini)\b/i.test(name);
}

function isApprovedSnapshotFamily(
  family: FlagshipFamilyPolicy,
  value: unknown,
): boolean {
  const snapshotFamily = text(value);
  if (!snapshotFamily) return false;
  return snapshotFamily === family.id || matches(family.familyPattern, snapshotFamily);
}

function toCatalogCandidate(
  value: unknown,
  provider: FlagshipProviderPolicy,
  family: FlagshipFamilyPolicy,
  asOfDay: string,
): Candidate | null {
  if (!isRecord(value)) return null;

  const id = text(value.id);
  const name = text(value.name);
  if (!id || !name) return null;
  if (!matches(family.idPattern, id) || !isApprovedModelName(family, name)) return null;

  const catalogFamily = text(value.family);
  if (family.familyPattern && (!catalogFamily || !matches(family.familyPattern, catalogFamily))) {
    return null;
  }

  const release = parseRelease(value.release_date, asOfDay);
  if (!release) return null;

  const version = parseVersion(family, id);
  if (!version) return null;

  return {
    provider,
    family,
    version,
    release,
    model: {
      provider: provider.id,
      lab: provider.lab,
      category: provider.category,
      family: family.id,
      id,
      name,
      releasedAt: release.raw,
      contextWindow: normalizeContext(value.limit),
      modalities: normalizeModalities(value.modalities),
      source: "models.dev public model catalog",
      sourceUrl: "https://models.dev/",
      selectionSource: "catalog",
    },
  };
}

function toSnapshotCandidate(
  value: unknown,
  provider: FlagshipProviderPolicy,
  family: FlagshipFamilyPolicy,
  asOfDay: string,
): Candidate | null {
  if (!isRecord(value)) return null;
  if (text(value.provider) !== provider.id || !isApprovedSnapshotFamily(family, value.family)) return null;

  const id = text(value.id);
  const name = text(value.name);
  if (!id || !name || !matches(family.idPattern, id) || !isApprovedModelName(family, name)) return null;

  const release = parseRelease(value.releasedAt, asOfDay);
  if (!release) return null;
  const version = parseVersion(family, id);
  if (!version) return null;

  const contextWindow =
    typeof value.contextWindow === "number" && Number.isFinite(value.contextWindow)
      ? value.contextWindow
      : null;
  const modalities = Array.isArray(value.modalities)
    ? value.modalities.filter((item): item is string => typeof item === "string")
    : [];

  return {
    provider,
    family,
    version,
    release,
    model: {
      provider: provider.id,
      lab: provider.lab,
      category: provider.category,
      family: family.id,
      id,
      name,
      releasedAt: release.raw,
      contextWindow,
      modalities,
      source: "known snapshot",
      sourceUrl: "https://models.dev/",
      selectionSource: "snapshot",
    },
  };
}

function selectBest(candidates: readonly Candidate[]): Candidate | null {
  let best: Candidate | null = null;
  for (const candidate of candidates) {
    if (!best || compareCandidates(candidate, best) > 0) best = candidate;
  }
  return best;
}

function resultStatus(selections: readonly ProviderSelection[]): SelectionResult["status"] {
  if (selections.length === 0) return "unavailable";

  const statuses = selections.map((selection) => selection.status);
  if (statuses.every((status) => status === "live")) return "live";
  if (statuses.every((status) => status === "snapshot")) return "snapshot";
  if (statuses.every((status) => status === "missing")) return "unavailable";
  return "partial-fallback";
}

/**
 * Select one flagship per explicitly configured provider.
 *
 * Catalog candidates are admitted only when their provider-specific approved
 * family pattern, version, display name, and release date all validate.  The
 * winning version is semantic-first; release time is consulted only for a
 * version tie.  A missing/invalid live family falls back to a known snapshot
 * and remains visible as `status: "snapshot"`. A newer approved snapshot also
 * wins over an older live family, with the downgrade made explicit.
 */
export function selectFlagshipModels(
  catalog: readonly CatalogModel[] | unknown,
  policy: FlagshipPolicy,
  knownSnapshot: readonly SnapshotModel[] | unknown,
): SelectionResult {
  const asOf = parseAsOf(policy?.asOf);
  const providers: readonly FlagshipProviderPolicy[] = Array.isArray(policy?.providers)
    ? policy.providers
    : [];
  const catalogRows = Array.isArray(catalog) ? catalog : [];
  const snapshotRows = Array.isArray(knownSnapshot) ? knownSnapshot : [];

  if (!asOf) {
    const selections = providers.map((provider) => ({
      provider: provider.id,
      lab: provider.lab,
      category: provider.category,
      approvedFamilies: provider.families.map((family) => family.id),
      status: "missing" as const,
      fallback: true,
      fallbackReason: "catalog-candidate-invalid" as const,
      model: null,
    }));
    return { status: resultStatus(selections), selections, models: [] };
  }

  const selections: ProviderSelection[] = providers.map((provider) => {
    const approvedFamilies = provider.families.map((family) => family.id);
    const liveCandidates: Candidate[] = [];
    let matchedFamilyRow = false;

    for (const row of catalogRows) {
      const rowId = isRecord(row) ? text(row.id) : null;
      for (const family of provider.families) {
        if (rowId && matches(family.idPattern, rowId)) matchedFamilyRow = true;
        const candidate = toCatalogCandidate(row, provider, family, asOf.day);
        if (candidate) liveCandidates.push(candidate);
      }
    }

    const snapshotCandidates: Candidate[] = [];
    for (const row of snapshotRows) {
      for (const family of provider.families) {
        const candidate = toSnapshotCandidate(row, provider, family, asOf.day);
        if (candidate) snapshotCandidates.push(candidate);
      }
    }

    const live = selectBest(liveCandidates);
    const snapshot = selectBest(snapshotCandidates);

    if (live && snapshot && compareCandidates(snapshot, live) > 0) {
      return {
        provider: provider.id,
        lab: provider.lab,
        category: provider.category,
        approvedFamilies,
        status: "snapshot",
        fallback: true,
        fallbackReason: "catalog-older-than-snapshot",
        model: snapshot.model,
      };
    }

    if (live) {
      return {
        provider: provider.id,
        lab: provider.lab,
        category: provider.category,
        approvedFamilies,
        status: "live",
        fallback: false,
        fallbackReason: null,
        model: live.model,
      };
    }

    if (snapshot) {
      return {
        provider: provider.id,
        lab: provider.lab,
        category: provider.category,
        approvedFamilies,
        status: "snapshot",
        fallback: true,
        fallbackReason: matchedFamilyRow
          ? "catalog-candidate-invalid"
          : "catalog-family-missing",
        model: snapshot.model,
      };
    }

    return {
      provider: provider.id,
      lab: provider.lab,
      category: provider.category,
      approvedFamilies,
      status: "missing",
      fallback: true,
      fallbackReason: matchedFamilyRow
        ? "catalog-candidate-invalid"
        : "no-known-snapshot",
      model: null,
    };
  });

  return {
    status: resultStatus(selections),
    selections,
    models: selections.flatMap((selection) => (selection.model ? [selection.model] : [])),
  };
}

