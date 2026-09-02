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
    id: "2026-09-01-treasury-jgb-yields",
    date: "2026-09-01",
    title: "10-Year Treasury Hits 4.8% as Japanese Yields Break Multi-Decade Highs",
    summary:
      "The 10-year Treasury yield rose to its highest level since January 2025 as Japan's 5-year JGB hit an all-time high and its 10-year crossed 3% for the first time since 1996 — a coordinated move worth understanding, not just watching.",
    body: `
      <p>The 10-year U.S. Treasury yield rose to 4.8% today, its highest level
      since January 2025. At the same time, Japan's 5-year government bond yield
      reached an all-time high of roughly 2.26%, while its 10-year yield reached
      3% for the first time since 1996.</p>

      <p><strong>Why does this matter?</strong> It matters because borrowing costs
      are rising in two of the world's largest government bond markets. Higher
      yields increase debt financing costs for governments and corporations,
      which can discourage investment and spending and weaken the labor market.
      Government bond yields also serve as benchmarks for many consumer-related
      loans, including mortgages, auto loans, and student loans. Japan is
      especially important because Japanese investors are major buyers of foreign
      bonds, including U.S. Treasuries. If Japanese bonds offer more attractive
      yields at home, Japanese investors may have less incentive to invest
      overseas, potentially placing even more upward pressure on U.S. yields. So,
      this is not just some fancy Wall Street headline that doesn't really affect
      the everyday average person. It absolutely does.</p>

      <p><strong>What's driving the move?</strong> The rise in yields suggests
      investors are demanding greater compensation to lend money to the U.S. and
      Japanese governments. Today's immediate catalyst appears to be the renewed
      rise in oil prices caused by the conflict in Iran, which is increasing
      concerns that inflation could remain elevated and force central banks to
      keep interest rates higher or raise them further. But more broadly,
      elevated fiscal deficits, heavy government debt issuance, and uncertainty
      over future demand for government bonds are also placing upward pressure on
      yields. In Japan specifically, the weak yen, persistent inflation, and
      expectations for additional Bank of Japan rate hikes are adding to the
      move. Together, these risks are causing investors to demand higher yields
      and a greater term premium for holding government debt.</p>

      <p><strong>What does this mean for bond investors and portfolio
      managers?</strong> For investors who already own long-duration bonds, the
      rise in yields means the value of those bonds has fallen. The longer the
      duration, the more sensitive the bond's price is to changes in interest
      rates, meaning investors with greater exposure to the long end of the curve
      have likely experienced larger losses. However, higher yields also create a
      more attractive entry point for investors looking to add duration and lock
      in higher income. For portfolio managers, the key question is whether
      yields are close to peaking or whether inflation and fiscal concerns will
      continue pushing them higher. They must also consider whether higher
      Japanese yields will encourage Japanese investors to move money out of U.S.
      Treasuries and back into Japanese bonds. If they believe yields have
      further to rise, they may remain underweight duration. If they believe
      economic weakness will eventually bring inflation and yields lower, this
      could be an opportunity to begin adding duration at more attractive
      levels.</p>

      <p><strong>What should you watch next?</strong> The biggest things to watch
      are oil prices, developments involving Iran, incoming labor and inflation
      data, comments from Federal Reserve and Bank of Japan officials, the value
      of the yen, and demand at upcoming government bond auctions. If oil
      continues rising and inflation remains sticky, yields could move even
      higher. If the economy or labor market weakens sharply, investors may
      rotate back into government bonds, pushing yields lower. The key question
      is whether inflation and fiscal risk or economic weakness becomes the
      market's dominant concern.</p>
    `,
  },
  {
    id: "2026-08-30-ai-buildout",
    date: "2026-08-30",
    title: "Will the AI Buildout Pay Off?",
    summary:
      "An investment and credit analysis of the $700B+ annual hyperscaler infrastructure race — separating whether AI succeeds from whether the capital financing it earns an adequate return.",
    body: `
      <div class="callout-box">
        <p class="lead">My view: AI succeeds. The buildout probably succeeds. But portions of the investment boom almost certainly get overbuilt.</p>
        <p>The important part is separating two questions that keep getting collapsed into one: will AI succeed, and will the AI capex cycle generate adequate returns. Those are not the same question.</p>
      </div>

      <table class="odds-table">
        <thead><tr><th>Outcome</th><th>Probability</th><th>What it means</th></tr></thead>
        <tbody>
          <tr><td>AI becomes transformative and most infrastructure earns attractive returns</td><td class="pct">55%</td><td>Best-case structural AI boom</td></tr>
          <tr><td>AI succeeds, but significant infrastructure is overbuilt</td><td class="pct">35%</td><td>Technology wins; many investments don't</td></tr>
          <tr><td>AI demand materially disappoints and buildout becomes a bust</td><td class="pct">10%</td><td>True AI bubble scenario</td></tr>
        </tbody>
      </table>

      <blockquote class="pull-quote">You can be extremely bullish on AI while still believing the AI infrastructure cycle eventually experiences a painful correction.</blockquote>

      <p>The internet provides the obvious precedent: it transformed civilization, yet telecom companies massively overbuilt fiber during the dot-com era and investors lost enormous amounts of money. Today, the evidence still favors genuine demand rather than speculative construction — Nvidia's latest quarter produced $89 billion of Data Center revenue, up 117% YoY, Microsoft says it remains capacity constrained, and Google Cloud backlog has reached $240 billion. The problem isn't demand today. The question is whether demand eventually becomes large enough to justify an infrastructure bill approaching historic proportions.</p>

      <span class="section-label">Section 1</span>
      <h4>Just how enormous has the AI buildout become?</h4>
      <p>J.P. Morgan estimates hyperscaler capex will reach roughly $697 billion in 2026 — up from about $150 billion in 2023. Alphabet expects $175–185B of 2026 capex, Meta $130–145B, and Microsoft spent $41B in just its latest quarter. Nvidia just announced partnerships with Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR to mobilize over $500 billion more of third-party capital. This is no longer just tech companies buying GPUs — it's an entire capital ecosystem spanning data centers, semiconductors, power, land, construction, private credit and project finance.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>Companies are spending close to $700 billion this year alone building the physical infrastructure behind AI. When you spend this much, AI can't just be useful — it needs to be extremely valuable.</p>
      </div>

      <span class="section-label">Section 2</span>
      <h4>The strongest argument that the buildout succeeds</h4>
      <p>Companies still can't build AI infrastructure fast enough. Microsoft's commercial remaining performance obligation reached $678 billion (+84% YoY), with all sequential growth coming from customers outside frontier-model labs, and Cloud revenue hit $59.3 billion (+27%) — nearly 90% from non-frontier-lab customers. That undercuts the thesis that a handful of AI labs are just recycling venture capital into GPUs. Google Cloud's backlog more than doubled to $240 billion, and Nvidia guided next-quarter revenue to $108B ±2%.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>If this were a bubble, why can't Microsoft and Google build capacity fast enough for their customers? The demand is showing up before the capacity does — that's the opposite of a speculative build with no buyers.</p>
      </div>

      <span class="section-label">Section 3</span>
      <h4>But here's the strongest bearish argument</h4>
      <p>J.P. Morgan Asset Management estimates a 10% return on current AI investment could require roughly $650 billion of annual AI revenue. Infrastructure can create enormous economic value while still producing mediocre investment returns — $5 trillion of spend generating only $250 billion of sustainable profit is a 5% ROI.</p>
      <div class="formula-block">ROI = 250 / 5,000 = 5%</div>
      <p>Goldman notes consumer AI adoption has been spectacular, but many users are on free tiers — enterprise monetization is what actually matters, and most companies outside semiconductors haven't shown substantial AI-attributable profit yet.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>A packed gym everyone pays $5/month for is still a bad investment if it cost $1 million to build. We know people want AI. We don't yet know if they'll pay enough to justify what's being spent building it.</p>
      </div>

      <span class="section-label">Section 4</span>
      <h4>The hidden variable: AI needs to create productivity</h4>
      <p>McKinsey argues AI economics are approaching viability for many use cases, but most companies report little measurable earnings impact because implementation — not cost — is the bottleneck. This mirrors earlier general-purpose technologies: factories that swapped steam for electric motors without redesigning around electricity saw little gain until they reorganized production entirely.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>If a bank spends $100 million on AI and it generates $500 million in value, adoption is obvious — and that chain is what ultimately justifies today's buildout, all the way down to Nvidia.</p>
      </div>

      <span class="section-label">Section 5</span>
      <h4>Why inference may matter more than training</h4>
      <p>Training happens periodically; inference happens every single time someone uses AI. McKinsey estimates global data-center demand could nearly triple from ~82 GW in 2025 to ~220 GW by 2030. If AI agents become ubiquitous, inference could dwarf today's training workloads.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>Training is building the car. Inference is every mile it ever drives. The bull case isn't just smarter models — it's billions of people using them constantly.</p>
      </div>

      <span class="section-label">Section 6</span>
      <h4>The biggest threat: efficiency</h4>
      <p>Cheaper inference per query sounds bearish for infrastructure demand — fewer GPUs needed per task. But the Jevons paradox cuts the other way: if inference gets 90% cheaper and usage grows 100x, total compute demand still explodes. Whichever force wins determines infrastructure demand.</p>
      <div class="formula-block">Compute Demand = AI Usage × Compute per Task</div>

      <span class="section-label">Section 7</span>
      <h4>The depreciation problem is underrated</h4>
      <p>A data-center building lasts decades; GPUs don't. Microsoft says roughly two-thirds of recent capex went to short-lived compute assets rather than buildings. Alphabet's depreciation jumped from $15.3B (2024) to $21.1B (2025), with further acceleration guided for 2026. Hyperscalers need enough cash not just to justify today's spend but to continually refresh hardware as it becomes obsolete.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>The building might last 40 years. The GPUs inside it won't. Companies need to make their money back before today's hardware is outdated.</p>
      </div>

      <span class="section-label">Section 8</span>
      <h4>Power may actually become the bottleneck</h4>
      <p>Gigawatt-scale power needs mean generation, transmission, permitting and land constrain how fast capacity can be added — not just GPU supply. Ironically, this may protect returns: if infrastructure could be built instantly, everyone would flood the market and compute prices would collapse.</p>

      <span class="section-label">Section 9</span>
      <h4>Why the Cisco comparison is imperfect</h4>
      <p>Cisco benefited enormously from the internet buildout until telecom infrastructure became overbuilt and its valuation compressed. The real lesson isn't "Nvidia = Cisco" — it's that even world-changing technology can see infrastructure investment temporarily outrun justified demand. Nvidia's moat (GPUs + CUDA + networking + software) is broader than Cisco's was, and inference gives it a larger recurring workload — but the same law applies: customers can't indefinitely increase capex faster than the value that capex generates.</p>

      <span class="section-label">Section 10</span>
      <h4>Why this isn't yet 1999</h4>
      <p>Microsoft, Alphabet, Amazon and Meta are financing this largely from existing cash flow, not speculative equity markets. Meta spent $31.1B on Q2 capex against only $784M of free cash flow, yet revenue grew 28% YoY to $60.8B and management still expects 2026 operating income to exceed 2025 — extraordinary spend against an exceptionally profitable core business.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>Dot-com companies were big dreams plus investor money plus no profits. Today's biggest AI spenders already generate enormous cash flow — they can afford to be wrong for a lot longer.</p>
      </div>

      <span class="section-label">Section 11</span>
      <h4>Where I think the bubble actually is</h4>
      <p>Not AI itself, and probably not Nvidia. Watch speculative infrastructure financed on aggressive utilization assumptions — data-center developments, GPU-cloud companies, leveraged private-credit structures. The more debt in the ecosystem, the more dangerous overbuilding becomes.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>If AI overbuilds, Microsoft isn't the first thing that blows up. Watch the operators borrowing heavily on the assumption that demand stays insane forever.</p>
      </div>

      <span class="section-label">Section 12</span>
      <h4>The circular-financing concern</h4>
      <p>Capital increasingly flows between chipmakers, hyperscalers, AI labs and infrastructure investors — Nvidia's $500B+ third-party mobilization is a clear example. That doesn't mean demand is fake, but it makes the quality of demand more important: a profitable company paying for AI from real savings is very different from an AI startup funding growth with borrowed or investor money, even if both show up as identical cloud revenue today.</p>

      <span class="section-label">Section 13</span>
      <h4>What would make me turn bearish?</h4>
      <p>Conviction would drop if several of these appeared together: hyperscalers stop describing themselves as capacity constrained; cloud AI revenue decelerates despite added capacity; GPU utilization falls; inference prices collapse faster than usage grows; enterprise pilots fail to convert to production; backlog growth slows sharply; capex keeps rising while incremental revenue stalls; data-center vacancy rises; AI infrastructure credit spreads widen; projects get canceled for demand reasons rather than power constraints; or executives start saying AI isn't generating measurable ROI.</p>

      <span class="section-label">Section 14</span>
      <h4>What would make me even more bullish?</h4>
      <p>AI moving visibly into ordinary corporate income statements — a bank citing a specific expense reduction, a retailer citing a specific margin improvement, software customers willingly paying materially more for AI products. Once that's widespread, the buildout becomes far easier to justify.</p>
      <div class="formula-block">AI → Productivity → Corporate Profits → AI Spending → Cloud Revenue → Data Centers → Semiconductors</div>

      <span class="section-label">Section 15</span>
      <h4>Base case, 2026–2030</h4>
      <p><strong>2026–27:</strong> Infrastructure boom continues — demand stays strong, capex stays elevated, power becomes increasingly important, inference grows rapidly.</p>
      <p><strong>2027–28:</strong> Monetization becomes the dominant question. Investors stop rewarding "we're investing aggressively" and start asking "show me the return." Enterprise adoption matters more than benchmarks.</p>
      <p><strong>2028–30:</strong> A shakeout. Supply temporarily overshoots demand somewhere in the ecosystem, compute prices fall, leveraged operators struggle, some AI companies fail, and Nvidia likely sees at least one real cyclical downturn — while usage keeps growing and the industry consolidates around the strongest operators.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>AI boom → enormous spending → real productivity → some overbuilding → painful shakeout → long-term AI dominance. Not "everything works perfectly forever," and not "AI was useless."</p>
      </div>

      <span class="section-label">Section 16</span>
      <h4>Investment implications — three separate bets</h4>
      <p><strong>Bet #1, AI adoption (very high conviction):</strong> AI becomes embedded across knowledge work, software, advertising, research and robotics.</p>
      <p><strong>Bet #2, AI compute demand (high conviction):</strong> Inference, agents and more sophisticated models keep aggregate compute demand growing despite efficiency gains.</p>
      <p><strong>Bet #3, current infrastructure earns extraordinary returns (moderate conviction):</strong> Capital is flooding in, competition will increase, hardware depreciates rapidly, and supply can eventually overshoot demand.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>Roughly 90% bullish on AI, 80% bullish on long-term compute demand, and much less certain every dollar spent today turns into $1.20 tomorrow.</p>
      </div>

      <span class="section-label">Section 17</span>
      <h4>The fixed income angle: how this shows up in credit</h4>
      <p>Equity investors ask if AI infrastructure earns an attractive return. Credit investors mostly ask whether the borrower can service its debt even in a mediocre outcome — a different bar, and the AI financing stack is stratified enough that the answer changes a lot depending on where in the capital structure you sit.</p>
      <p>Hyperscaler corporate debt is close to the safest AI exposure available — Microsoft, Alphabet, Amazon and Meta finance the bulk of capex from operating cash flow, and where they do issue debt, spreads stay tight because the market is underwriting Azure, Search and AWS, not the AI thesis specifically. Below that sits a fast-growing layer of purpose-built data-center debt: project finance, ABS collateralized by hyperscaler or AI-lab leases, and private credit facilities. That paper depends on a single tenant's lease payments holding for the life of the facility and on hardware still being useful enough to justify renewal in year seven or eight — a very different credit than the parent-company paper above it, even when the coupon and tenor look identical on a term sheet.</p>
      <p>The specific risk is tenant concentration: a lease to a hyperscaler and a lease to a venture-funded AI lab burning cash can look identical on a spreadsheet today, but only one of those tenants obviously makes the twelfth payment in a downturn. There's also a depreciation-driven refinancing mismatch unique to fixed income — long-dated project debt against GPUs that may be obsolete well before the debt matures. Spread compression across the sector right now suggests the market isn't yet differentiating much between these buckets, which is both the risk and, for anyone doing the underwriting work, the opportunity.</p>
      <div class="simple-version">
        <span class="label">SIMPLE VERSION</span>
        <p>Lending to Microsoft is about as safe as AI-adjacent credit gets — they'd be fine even if AI never earns its keep. Lending to a standalone data-center project that only gets paid if one tenant keeps paying rent for fifteen years on hardware that's obsolete in five is a completely different bet, even if it's labeled the same way. The spread should reflect that difference. Right now it often doesn't.</p>
      </div>

      <span class="section-label">Section 18</span>
      <h4>Final verdict — does the AI buildout succeed?</h4>
      <p><strong>Yes</strong> — the highest-conviction outcome here. Demand looks real: Microsoft's backlog is exploding, Google Cloud's backlog has more than doubled, and Nvidia just grew Data Center revenue 117% YoY. But the harder question — whether AI generates enough economic value to justify hundreds of billions in annual infrastructure spend — isn't settled, which is why the bubble argument deserves refining rather than dismissing.</p>
      <blockquote class="pull-quote">AI is probably one of the most important technological shifts of our lifetime. The infrastructure supporting it will therefore become enormously valuable. But the combination of extraordinary capital availability, competitive pressure, and extrapolation of current growth almost guarantees that portions of the ecosystem will eventually overbuild. The technology can succeed spectacularly while some of the investments financing it fail spectacularly.</blockquote>

      <div class="simple-version bottom-line">
        <span class="label">THE WHOLE REPORT IN 30 SECONDS</span>
        <p>AI is going to work. Microsoft and Google still can't build capacity fast enough, and Nvidia's data-center business just more than doubled. But everyone is spending close to $700 billion this year to meet that demand, so the real debate isn't "is AI fake" — it's "can AI make businesses enough money to justify all this spending?"</p>
        <p>Probably yes, overall. But some capacity will get overbuilt, some leveraged data-center bets will get crushed, some AI companies will disappear, and Nvidia will eventually see a real cyclical downturn. The base case isn't "AI bubble pops" — it's <strong>AI wins. Some AI investments don't.</strong> That's a big difference.</p>
      </div>
    `,
  },
];
