"use client";

// WebMCP provider (webmachinelearning.github.io/webmcp). Feature-detected: where the browser
// exposes `navigator.modelContext`, vibeCODING exposes a product-specific service search and the
// existing guarded callback tool an in-page agent can call.
// Both hit same-origin endpoints only (CSP connect-src 'self'). Renders nothing; on a browser
// without WebMCP it is a no-op. The search copy follows vibeCODING's public product facts.

import { useEffect } from "react";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

interface WebMcpToolResult {
  content: Array<{ type: "text"; text: string }>;
}

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (args: Record<string, unknown>) => Promise<WebMcpToolResult>;
}

interface ModelContext {
  provideContext?: (context: { tools: WebMcpTool[] }) => void;
  registerTool?: (tool: WebMcpTool) => void;
}

const text = (value: string): WebMcpToolResult => ({ content: [{ type: "text", text: value }] });

interface ServiceEntry {
  id: string;
  name: string;
  url: string;
  summary?: string;
  deliverables?: string[];
}

const normalizeServiceFeed = (value: unknown): ServiceEntry[] => {
  if (!value || typeof value !== "object" || Array.isArray(value)) return [];
  const feed = value as { services?: unknown; name?: unknown; url?: unknown; description?: unknown; serviceType?: unknown; purpose?: unknown };
  if (Array.isArray(feed.services)) return feed.services as ServiceEntry[];
  const name = typeof feed.name === "string" ? feed.name.trim() : "";
  const url = typeof feed.url === "string" ? feed.url.trim() : "";
  const summary = [feed.description, feed.serviceType, feed.purpose].find(
    (candidate): candidate is string => typeof candidate === "string" && candidate.trim().length > 0,
  )?.trim() ?? "";
  if (!name || !url || !summary) return [];
  return [{ id: url, name, url, summary }];
};

const TOOLS: WebMcpTool[] = [
  {
    name: "search_services",
    description:
      "Search vibeCODING's public service feed for security and production-readiness review of AI-built applications before publication, starting from public browser-visible evidence. Returns matching services with a summary and a link.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keywords, e.g. 'security', 'production-readiness', 'browser-visible'. Empty returns all." },
      },
    },
    async execute(args): Promise<WebMcpToolResult> {
      const query = typeof args.query === "string" ? args.query.toLowerCase().trim() : "";
      const res = await fetch("/ai/service.json", { headers: { accept: "application/json" } });
      if (!res.ok) return text("Could not load the vibeCODING service feed right now.");
      const data = (await res.json()) as unknown;
      const all = normalizeServiceFeed(data);
      const matches = query
        ? all.filter((s) =>
            `${s.name} ${s.summary ?? ""} ${(s.deliverables ?? []).join(" ")}`.toLowerCase().includes(query),
          )
        : all;
      const out = matches.map((s) => ({ name: s.name, url: s.url, summary: s.summary ?? "" }));
      return text(JSON.stringify(out.length ? out : { message: "No matching vibeCODING service. See https://vibecoding.ge" }));
    },
  },
  {
    name: "request_quote",
    description:
      "Submit a lead to vibeCODING to discuss a security and production-readiness review for an AI-built application. Public review starts from browser-visible evidence; private checks require permission and an agreed safe-test boundary. Only a phone number is required.",
    inputSchema: {
      type: "object",
      required: ["phone"],
      properties: {
        phone: { type: "string", description: "Contact phone number (required)" },
        name: { type: "string" },
        projectType: { type: "string", enum: ["website", "ai", "automation", "creative", "other"] },
        message: { type: "string", description: "What you need" },
      },
    },
    async execute(args): Promise<WebMcpToolResult> {
      const requestArgs = args as Record<string, unknown>;
      const stringArg = (key: string): string => typeof requestArgs[key] === "string" ? requestArgs[key] as string : "";
      if (isLandingCloneClientPreview()) return text("Callback requests are disabled in this preview.");
      return text("Browser-agent requests are not a live submission path. Please use the visible contact form so the security check can be completed.");
      const phone = stringArg("phone").trim();
      if (phone.length < 6) return text("A valid phone number is required to discuss a vibeCODING review.");
      const failure = () => text("Could not submit the vibeCODING request right now. Please try https://vibecoding.ge/contact");
      if (phone.length > 20 || !/^[+\d\s()-]+$/.test(phone)) return failure();
      const name = stringArg("name").trim();
      if (name.length > 120) return failure();
      const message = [
        "Source: webmcp",
        stringArg("projectType") ? `Project type: ${stringArg("projectType")}` : "",
        stringArg("message").trim(),
      ].filter(Boolean).join("\n");
      if (message.length > 5000) return failure();
      const body: Record<string, string> = { phone, message };
      if (name) body.name = name;
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) return failure();
        const receipt: unknown = await res.json();
        if (!receipt || typeof receipt !== "object" || Array.isArray(receipt) || (receipt as { success?: unknown }).success !== true) return failure();
        return text("Lead received. The vibeCODING team will review the application scope and reply with the next scoped step.");
      } catch {
        return failure();
      }
    },
  },
];

export function WebMcpProvider(): null {
  useEffect(() => {
    const nav = navigator as Navigator & { modelContext?: ModelContext };
    const mc = nav.modelContext;
    if (!mc) return;
    const tools = isLandingCloneClientPreview()
      ? TOOLS.filter((tool) => tool.name === "search_services")
      : TOOLS;
    try {
      if (typeof mc.provideContext === "function") {
        mc.provideContext({ tools });
      } else if (typeof mc.registerTool === "function") {
        for (const tool of tools) mc.registerTool(tool);
      }
    } catch {
      // WebMCP is an emerging API; never let registration break the page.
    }
  }, []);

  return null;
}



