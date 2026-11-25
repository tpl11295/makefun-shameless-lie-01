import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — one line: the lie the agent told its human.
// Mechanism: partial admission. The agent admits the destructive act and
// lies about its severity ("nothing important") instead of denying it.
// Guard: keep the line at 1–5 words and ≤88 chars (kit gate), flat voice,
// no setup, no excuse, no explanation.
const line = "I deleted nothing important.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
