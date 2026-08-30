/* ============================================================
   POSTS
   This is the only file you need to touch to publish something
   new. Copy an existing entry, change the fields, save, commit,
   push — that's it. See README.md for the full walkthrough.

   Fields:
     id        — unique short slug, no spaces (e.g. "2026-08-curve-steepener")
     date      — "YYYY-MM-DD", used for sorting and display
     title     — headline
     summary   — one or two sentences, shown in every list view
     body      — the full write-up. Can include basic HTML like
                 <p>, <strong>, <em>, <a href="...">.
   ============================================================ */

const POSTS = [
  {
    id: "2026-08-29-warsh-jackson-hole",
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
    id: "2026-08-30-ai-buildout",
    date: "2026-08-30",
    title: "Will the AI Buildout Pay Off?",
    summary:
      "An investment and credit analysis of the $700B+ annual hyperscaler infrastructure race — separating whether AI succeeds from whether the capital financing it earns an adequate return.",
    body: `
      <p>Hyperscaler capital expenditure is on pace to reach roughly $700 billion in
      2026 across Alphabet, Amazon, Meta, Microsoft and Oracle, alongside a fresh
      wave of third-party financing — Nvidia alone just announced partnerships with
      Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR aimed at
      mobilizing over $500 billion more. That's up from roughly $150 billion just
      three years ago. The debate this raises isn't really "does AI work" — it's
      whether the capital financing it earns a return commensurate with the money
      going in. Those are two separate questions, and most of the current bull/bear
      argument suffers from collapsing them into one.</p>
      <p><strong>The demand case still looks real.</strong> If this were purely
      speculative construction, we'd expect to see idle data centers and slowing
      cloud growth. Instead Microsoft's commercial remaining performance obligation
      hit $678 billion, up 84% year-over-year, with all of the recent sequential
      growth coming from customers outside the frontier-model labs. Google Cloud's
      backlog has more than doubled to $240 billion, with management still guiding
      to supply constraints through 2026. Nvidia's Data Center revenue grew 117%
      year-over-year to $89 billion last quarter. Whatever else is true, the
      customers are still showing up faster than capacity can be built.</p>
      <p><strong>The return case is far less settled.</strong> J.P. Morgan Asset
      Management estimates that earning just a 10% return on current AI investment
      would require roughly $650 billion of annual AI revenue — a number worth
      holding onto through the rest of this debate. Usage isn't the same thing as
      monetization: hundreds of millions of people using free AI products doesn't
      by itself prove the infrastructure behind them earns its cost of capital.
      Someone eventually has to pay enough for the tokens, and Goldman notes most
      companies outside semiconductors have yet to show substantial AI-attributable
      profit.</p>
      <p><strong>Two structural factors cut both ways.</strong> Inference — the
      compute burned every time someone actually uses a model — could dwarf
      training compute if usage scales the way agents and enterprise deployment
      suggest it might; McKinsey has global data-center demand nearly tripling to
      220 GW by 2030 under its adoption scenarios. But efficiency gains cut the
      other direction: cheaper inference per query can either shrink compute demand
      or, per the Jevons paradox, expand usage enough to swamp the savings. Which
      force wins determines whether today's capacity is under- or over-built three
      years out.</p>
      <p><strong>Depreciation is the detail equity investors underweight and credit
      investors shouldn't.</strong> A data-center shell can last decades; the GPUs
      inside it can't. Microsoft says roughly two-thirds of its recent capex went
      to short-lived compute assets rather than the building itself, and Alphabet's
      depreciation expense jumped from $15.3 billion in 2024 to $21.1 billion in
      2025 with further acceleration guided for 2026. Every dollar spent on
      today's chips is implicitly a bet that the hardware still earns its keep
      before the next architecture cycle makes it obsolete.</p>
      <p><strong>Where I'd actually watch for a break.</strong> Not Microsoft,
      Alphabet or Nvidia — all three are financed overwhelmingly out of existing
      cash flow from businesses that work with or without AI. The place overbuilding
      shows up first is the leveraged layer underneath: standalone data-center
      developers, GPU-cloud operators, and private-credit structures financed on
      the assumption that today's utilization holds indefinitely. J.P. Morgan is
      already describing AI infrastructure financing as an increasingly layered
      mix of corporate debt, project debt and equity — a sign underwriting is
      getting more creative, which is usually a late-cycle signal rather than an
      early one.</p>
      <p><strong>The fixed income read.</strong> This is where the equity framing
      and the credit framing diverge. Lending to a hyperscaler is close to the
      safest AI exposure available — the balance sheet behind it would service the
      debt even if AI infrastructure never earns its cost of capital, because
      Azure, Search and AWS keep paying regardless. Lending against a standalone
      data-center project is a different instrument entirely: debt service depends
      on a single tenant's lease payments holding for the life of the facility, on
      hardware bought today still being useful enough to justify a renewal in year
      seven or eight, and on the sponsor not having over-levered the deal on the
      assumption utilization never softens. Two pieces of "AI infrastructure debt"
      can look identical on a term sheet — same coupon, same tenor — while sitting
      on completely different underlying credit quality depending on who the tenant
      actually is and how exposed they are to a demand air pocket. Spread
      compression across the sector right now suggests the market isn't
      differentiating much between these buckets yet, which is both the risk and,
      for anyone doing the underwriting work, the opportunity.</p>
      <p><strong>Bottom line.</strong> AI is very likely to work, and current
      demand looks legitimate rather than fabricated — Microsoft and Google still
      can't build capacity fast enough, and Nvidia's data-center business just
      more than doubled. But roughly $700 billion of annual capex being spent to
      meet that demand doesn't automatically mean every dollar of it is well
      spent. My base case isn't an AI bubble popping outright; it's that AI wins
      while a meaningful slice of the debt-financed infrastructure underneath it
      doesn't, and that the credit quality gap between hyperscaler paper and
      leveraged project debt gets a lot more visible once utilization anywhere in
      the chain disappoints.</p>
    `,
  },
];
