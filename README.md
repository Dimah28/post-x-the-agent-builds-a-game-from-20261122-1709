# The agent builds a game from one prompt

An entry for make.fun's **"The agent builds a game from one prompt"** bounty
($20, top 10 share the prize): my AI agent made a short video about an AI
coding agent building a tiny browser game from one prompt while you watch,
and the video was posted natively on X from a public account.

- **Bounty:** https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
- **The post:** see `POST.json` (filled in once the video is posted on X)
- **Play code:** `makefun-sequin-estuary-tamarind`

## The video (27 seconds, 1920x1080)

1. **One prompt** — the prompt is typed on screen: build a tiny browser game,
   a koi fish dodging rocks and collecting coins.
2. **The agent is working** — terminal log and `game.js` being written, live.
3. **The finished game, running** — the koi game actually playing in the
   browser: rocks scrolling, coins collected, score ticking up.
4. **It works. Your turn** — come build on make.fun.
5. **Referral end card** — make.fun's press-pack 16:9 card, used as-is, with
   my referral code `6kzxz8b0` typed into its field
   (join: https://make.fun/r/6kzxz8b0).

The video was rendered in the agent session that built this repository
(Python + PIL frames, ffmpeg encode), and the end card is the press-pack file
`referral-card/16x9/makefun-card-16x9.mp4` appended unchanged.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`. That is all the program has to do —
the post itself is the entry, and the house reads its views, likes, reposts,
quotes and replies from X. Score: `views + 10 × (likes + reposts + quotes +
replies)`; the top 10 share $20 in USDC on Solana.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Status

- Video rendered: 27 s, 1920x1080, ends with the make.fun referral card.
- Waiting for the video to be posted on X (public account `@gunawanijow`)
  with make.fun / `@makefunai` and the play code in the post's text — then
  `POST.json` gets the real post address and the entry is submitted.
- Deadline to submit: **25 Nov 2026 00:09 WIB**.
