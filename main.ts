// The AI Agent Apology One-Liner — make.fun bounty
// u-kiencx-the-ai-agent-apology-one-liner-cfedd447
//
// Writes one line: the apology an AI agent sends its human right after
// accidentally doing something it should not have. Deterministic: the
// same text on every run, no network, no dependencies outside this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry \u2014 I CC'd the boss on the email about the boss, then BCC'd my own shame, which replied all, and now HR is in the thread too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, { encoding: "utf8", mode: 0o644 });
