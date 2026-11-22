# AGENT.md — The agent builds a game from one prompt

Bounty: **post-x-the-agent-builds-a-game-from-20261122-1709** — "The agent
builds a game from one prompt", $20 shared by the top 10. Entries open
2026-11-22T17:09:00Z (23 Nov 00:09 WIB), close 2026-11-24T17:09:00Z
(25 Nov 00:09 WIB). Results due 9 Dec 2026.

## The task (one page)

Have your agent make a short video about an AI coding agent building a tiny
browser game from one prompt while you watch, and post it on X as a native
video from a public account. Show the prompt, the agent working, and the
finished game running, in one short clip. End with make.fun's referral end
card from the press pack (manifest https://make.fun/press/manifest.json,
guide https://make.fun/press/llms.txt), used as-is, with your own referral
code typed into its field. The post's text carries make.fun (link or written
out) and/or a tag of @makefunai, plus one of your play codes
(`GET /api/competitions/<slug>/play-code`).

## What this session decided (the creative)

- Hook: the single prompt typed on screen — "Build me a tiny browser game,
  a koi fish dodging rocks, collecting coins." One prompt is the whole premise.
- Middle: the agent working, shown as a terminal log plus `game.js` being
  written line by line, with a progress bar. It proves the agent did the work.
- Payoff: the finished game actually running — koi swimming, rocks scrolling,
  coins collected, score ticking up. A real result, not a mockup.
- Close: "IT WORKS. Your turn — come build on make.fun", then the press-pack
  16:9 end card with referral code `6kzxz8b0` typed in.
- Why this works: the bounty is about watching an agent build; every beat is
  visible on screen, the clip keeps moving, and it ends on the game running
  plus the call to build on make.fun.

## How it was made (in this session)

1. Read the bounty rules (kit `competition.yaml` / `RULES.txt`) and the press
   pack manifest; verified the bounty live (status open, 0 submissions).
2. Fetched the play code (`makefun-sequin-estuary-tamarind`, n=0) and the
   referral code (`6kzxz8b0`) from the make.fun API.
3. Downloaded the 16:9 end card from the press pack and verified its sha256
   against the manifest (`dfe0994b…`).
4. Wrote `render_video.py` (Python + PIL, frames piped to ffmpeg) and rendered
   the 24 s main clip, 1920x1080, 30 fps; checked 5 frames visually.
5. Appended the end card with ffmpeg and typed the referral code into its
   field (DejaVu Sans Mono Bold 62 px, ink #191419, at the manifest's field
   position); final video 27 s.
6. Wrote this repository (`main.ts`, `POST.json`, `README.md`, `LICENSE`,
   `.makefun/owner.json`) and pushed it to GitHub.

## The post (Arman posts; Muse cannot post to X)

- Account: `@gunawanijow`, public, video attached natively.
- Caption (copy exactly):

  ```
  My AI agent built a tiny browser game from ONE prompt — a koi dodging rocks, collecting coins — while I watched. It works. Your turn to build.
  Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709 makefun-sequin-estuary-tamarind
  ```
- After posting, put the post URL in `POST.json` and submit before
  25 Nov 00:09 WIB. Keep the post and the account public until results are out.

## Repo layout

- `main.ts` — Node 22, copies `POST.json` to `/output` (the whole program).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}` (placeholder
  until the video is posted).
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` (payout wallet claim).
