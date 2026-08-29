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
    id: "2026-08-curve-steepener-example",
    category: "trends",
    date: "2026-08-24",
    title: "Front-end richening keeps the 2s10s steepener alive",
    summary:
      "Policy rate cut pricing has pulled the front end down faster than the long end, and the technical backdrop still favors a gradual steepening bias into year-end.",
    body: `
      <p>[This is a placeholder entry so you can see the formatting. Replace the
      title, date, summary, and this body with your own commentary, then delete
      this note.]</p>
      <p>Write in whatever length and structure suits the piece — short mid-week
      notes or longer weekly wrap-ups both work. Paragraphs render exactly as
      you'd expect; you can also use <strong>bold</strong>, <em>italics</em>,
      and links.</p>
    `,
  },
  {
    id: "2026-08-ig-credit-example",
    category: "trades",
    date: "2026-08-20",
    title: "Long 7–10yr IG credit vs. underweight duration-matched Treasuries",
    summary:
      "Spreads still compensate for the marginal default risk at this point in the cycle, and the carry is attractive relative to sitting in cash.",
    conviction: "medium",
    body: `
      <p>[Placeholder entry — replace with your own trade write-up.] Lay out the
      thesis, the entry point, sizing, what would change your mind, and how
      you're tracking it.</p>
      <p>Use the <code>conviction</code> field above to mark this "high",
      "medium", or "low" — it shows up as a badge next to the title.</p>
    `,
  },
];
