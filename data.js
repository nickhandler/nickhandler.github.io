/* ============================================================
   POSTS
   This is the only file you need to touch to publish something
   new. Copy an existing entry, change the fields, save, commit,
   push — that's it. See README.md for the full walkthrough.

   Fields:
     id        — unique short slug, no spaces (e.g. "2026-08-curve-steepener")
     category  — "trends" or "trades"
     date      — "YYYY-MM-DD", used for sorting and display
     title     — headline
     summary   — one or two sentences, shown in every list view
     body      — the full write-up. Can include basic HTML like
                 <p>, <strong>, <em>, <a href="...">.
     conviction — ONLY for category "trades": "high" | "medium" | "low"
   ============================================================ */

const POSTS = [
  {
    id: "2026-08-29-warsh-jackson-hole",
    category: "trends",
    date: "2026-08-29",
    title: "Warsh's Jackson Hole Speech Repriced the Front End",
    summary:
      "Chair Warsh still won't commit to a reaction function, but Friday's tone was hawkish enough to send September hike odds from roughly a third to a coin flip and flatten the curve in a single session.",
    body: `
      <p>Kevin Warsh has spent his first three months as Fed Chair deliberately
      declining to define his reaction function — the conditions under which he'd
      actually move rates. Friday's Jackson Hole keynote, delivered under real
      pressure from investors and press to finally show his hand, didn't fully
      resolve that. But it moved the needle further than anything he's said since
      taking the chair in May.</p>
      <p>The substance: Warsh flagged PCE inflation running roughly 3.7% year-over-year
      and near 4.1% annualized over the past six months, and said the Fed "must be
      confident that underlying inflation is moving to our objective, clearly and at
      sufficient speed" — otherwise, in his words, "we have work to do." He also used
      the platform to argue forward guidance itself has "outstayed its welcome" as a
      policy tool, and framed AI as a genuine new variable for the labor market. None
      of that is a commitment to hike. All of it reads more hawkish than the market
      had priced in.</p>
      <p>The reaction was a clean bear flattener. The 2-year yield — the part of the
      curve most sensitive to the next FOMC meeting — jumped roughly 9-13bp intraday
      to around 4.32-4.35%, its highest level in a month. The 10-year moved only a few
      basis points to the 4.70-4.72% area, and the 30-year barely budged. The dollar
      index gained about half a percent. Most tellingly, CME's implied odds of a
      25bp hike at the September 15-16 meeting roughly doubled off the back of the
      speech — from the mid-30s into the mid-50s to high-50s, depending on the
      snapshot. Equities held up through the morning before fading into the close.</p>
      <p>What this does and doesn't tell us: September has gone from a low-probability
      tail case to a genuine coin flip, and that's a real repricing. What it hasn't
      done is give the market an actual reaction function. Warsh still didn't say
      what data point would flip him, and he still explicitly prefers letting markets
      infer his stance from data rather than signaling it directly. That's the part
      worth sitting with heading into the next CPI and payrolls prints — the
      September meeting is now genuinely two-way, and one soft inflation read could
      unwind a meaningful chunk of Friday's move as easily as one hot one could
      confirm it.</p>
    `,
  },
  {
    id: "2026-08-29-2s10s-steepener",
    category: "trades",
    date: "2026-08-29",
    title: "2s10s Steepener: Fading Friday's Flattening",
    conviction: "high",
    summary:
      "Positioning for the curve to re-steepen from post-Jackson Hole levels — the front end likely overshot on a speech that still stopped short of committing to a hike, while deficit-driven long-end supply keeps term premium underpinned over the next 6-12 months.",
    body: `
      <p><strong>The thesis.</strong> Friday's bear flattener priced in more hiking
      conviction than Warsh actually delivered. He raised the odds of a September
      move without ever describing the reaction function that would trigger it —
      which means the front end is now leaning on a coin-flip outcome rather than a
      committed policy path. A soft CPI or payrolls print between now and the
      September 15-16 meeting could unwind a good chunk of the front-end selloff
      just as fast as it happened. I want to be positioned for the curve to
      re-steepen from here, not for the flattening to extend.</p>
      <p><strong>Why this holds over 6-12 months, not just the next print.</strong>
      Layered on top of the near-term data dependency is a structural argument for
      a steeper curve: elevated Treasury issuance against a widening deficit keeps
      demanding more term premium at the long end regardless of where the funds
      rate ultimately lands. A Fed chair who has explicitly said he'd rather let
      markets read the data than issue guidance also means more two-way volatility
      priced into the belly and long end over time — that's a steepening force, not
      a flattening one, once the immediate September-meeting uncertainty resolves
      either way.</p>
      <p><strong>Expression.</strong> Long the 2s10s steepener — received exposure
      in the belly/front end funded against paid exposure at the 10-year — entered
      at levels cheapened by Friday's move rather than chasing it from pre-speech
      levels. Sizing modest to start given September genuinely is a coin flip right
      now; I'd add if the front end cheapens further into the meeting without a
      change in the underlying inflation trajectory.</p>
      <p><strong>What invalidates it.</strong> A hot September CPI or payrolls print
      that removes the coin-flip framing and convinces the market this is the start
      of an actual hiking cycle — that would keep the front end cheap and the curve
      flatter for longer, and I'd need to cut the position rather than average into
      it. I'm also watching for any actual articulation of a reaction function from
      Warsh himself, since that's the one thing that could reprice this faster than
      a data print.</p>
    `,
  },
];
