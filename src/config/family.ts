// GENERATED FILE. Do not edit.
// Source: landings/family.json in the AGENT repo.
// Regenerate: python scripts/landings.py sync
//
// The footer filters SITE.domain out of this list, so a site never links to itself, and drops
// any member with live: false, so a landing that has not shipped yet stays out of the directory.

export interface FamilyMember {
  key: string;
  domain: string;
  label: string;
  live: boolean;
}

export const FAMILY: readonly FamilyMember[] = [
  { key: "ainow", domain: "ainow.ge", label: "aiNOW.ge", live: true },
  { key: "aicontent", domain: "aicontent.ge", label: "aiCONTENT.ge", live: true },
  { key: "aiads", domain: "aiads.ge", label: "aiADS.ge", live: true },
  { key: "aistaff", domain: "aistaff.ge", label: "aiSTAFF.ge", live: true },
  { key: "iai", domain: "iai.ge", label: "iAI.ge", live: true },
  { key: "aiweb", domain: "aiweb.ge", label: "aiWEB.ge", live: false },
  { key: "aicall", domain: "aicall.ge", label: "aiCALL.ge", live: false },
  { key: "aioffice", domain: "aioffice.ge", label: "aiOFFICE.ge", live: false },
  { key: "aidocs", domain: "aidocs.ge", label: "aiDOCS.ge", live: false },
  { key: "aitaxi", domain: "aitaxi.ge", label: "aiTAXI.ge", live: true },
  { key: "aiapp", domain: "aiapp.ge", label: "aiAPP.ge", live: false },
  { key: "vibecoding", domain: "vibecoding.ge", label: "vibecoding.ge", live: false },
] as const;
