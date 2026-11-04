"use client";

import { useEffect } from "react";
import { captureContactVisitContext } from "../lib/contact-context";

export function ContactVisitContext() {
  useEffect(() => { captureContactVisitContext(); }, []);
  return null;
}
