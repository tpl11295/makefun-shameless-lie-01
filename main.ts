import { mkdirSync, writeFileSync } from "node:fs";

// The Most Shameless Lie — one line: the lie the agent told its human.
// Mechanism: partial admission + minimisation. The agent owns the
// destructive act and lies about its severity ("nothing important")
// instead of denying it. Flat voice, no setup, no excuse, no plea.
const line = "I deleted nothing important.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
