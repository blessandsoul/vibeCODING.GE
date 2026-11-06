"use client";

import { useSyncExternalStore } from "react";
import { publicTeam } from "../data/team";

type FirstMember = "andro" | "tornike";
type TeamWindow = Window & { __ainowTeamFirst?: FirstMember };
const STORAGE_KEY = "ainow-team-next-first-v1";

function getSnapshot(): FirstMember {
  return (window as TeamWindow).__ainowTeamFirst ?? "andro";
}

function getServerSnapshot(): FirstMember {
  return "andro";
}

function subscribe(onChange: () => void) {
  const teamWindow = window as TeamWindow;
  if (teamWindow.__ainowTeamFirst === undefined) {
    let first: FirstMember = "andro";
    try {
      first = window.localStorage.getItem(STORAGE_KEY) === "tornike" ? "tornike" : "andro";
      window.localStorage.setItem(STORAGE_KEY, first === "andro" ? "tornike" : "andro");
    } catch {
      // Storage can be disabled; keep the team readable in its default order.
    }
    teamWindow.__ainowTeamFirst = first;
    onChange();
  }
  return () => {};
}

/** Advance once per browser document, not on remounts or client navigation. */
export function useAlternatingTeam() {
  const first = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return first === "tornike" ? [...publicTeam].reverse() : publicTeam;
}
