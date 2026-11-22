// Entry program for make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry is the post itself: a short video on X about an AI coding agent
// building a tiny browser game from one prompt while you watch, ending with
// make.fun's referral end card and the entrant's referral code, posted
// natively from a public X account with make.fun / @makefunai and a play
// code in its text. This program only hands in the post's address: it copies
// POST.json from the repository root to /output/POST.json, where the house
// reads it. Nothing it writes about the post is scored.
//
// Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

// Sanity check first: POST.json must parse as a JSON object, so a broken
// placeholder fails loudly here instead of passing a bad file to the gate.
const postPath = join(BOT_DIR, "POST.json");
const parsed: unknown = JSON.parse(readFileSync(postPath, "utf-8"));
if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  console.error("POST.json is not a JSON object");
  process.exit(1);
}

try {
  copyFileSync(postPath, join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
