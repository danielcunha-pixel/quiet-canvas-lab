# Ardia UI Moodboard

Sandbox of dashboard iterations generated with the [Hallmark](https://github.com/nutlope/hallmark) design skill. Each version is a complete, standalone static build with its own palette, type pairing, and macrostructure — kept side-by-side for visual comparison.

This repository is a **moodboard / exploration**, not production code. It is decoupled from any product codebase.

## Versions

| | Version | Macrostructure | Theme |
|---|---|---|---|
| **v1** | Bento Grid · Quiet | Bento Grid | Quiet (warm-oat mono) |
| **v2** | Stat-Led · custom (tech-industrial) | Stat-Led | Custom OKLCH (steel-blue + lime signal) |
| **v3** | Bento Grid · studied-DNA (consumer-SaaS) | Bento Grid | Studied-DNA (deep teal + lime) |

The aggregator at `/` lists every version with a date + time + link. Each version page carries a floating sandbox affordance (dashed-border pill, bottom-right) that returns to the aggregator without opening a new tab.

## Stack

- Pure static HTML + CSS — no build step, no JS framework
- Google Fonts loaded per version (Fraunces + Geist for v1, JetBrains Mono + Geist for v2, Plus Jakarta Sans + Geist Mono for v3)
- OKLCH colour throughout
- Hosted on Vercel
