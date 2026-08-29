/* Shared rendering helpers. Included on every page after data.js. */

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d
    .toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

function sortedByDate(posts) {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function convictionBadge(level) {
  if (!level) return "";
  const label = level.charAt(0).toUpperCase() + level.slice(1) + " Conviction";
  return `<span class="badge ${level}">${label}</span>`;
}

/* ---- Home page: latest N per category, preview only ---- */
function renderPreviewColumn(containerId, category, limit = 3) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const posts = sortedByDate(POSTS.filter((p) => p.category === category)).slice(0, limit);

  if (posts.length === 0) {
    el.innerHTML = `<p class="empty-note">Nothing published yet.</p>`;
    return;
  }

  el.innerHTML = posts
    .map(
      (p) => `
      <div class="pub-item">
        <div class="pub-date">${formatDate(p.date)}</div>
        <h3><a href="${category}.html#${p.id}">${p.title}</a></h3>
        <p class="summary">${p.summary}</p>
      </div>`
    )
    .join("");
}

/* ---- Trends / Trades pages: full expandable list ---- */
function renderArticleList(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const posts = sortedByDate(POSTS.filter((p) => p.category === category));

  if (posts.length === 0) {
    el.innerHTML = `<p class="empty-note">Nothing published yet — check back soon.</p>`;
    return;
  }

  el.innerHTML = posts
    .map(
      (p) => `
      <details class="article" id="${p.id}">
        <summary>
          <span class="meta-date">${formatDate(p.date)}</span>
          <span>
            ${convictionBadge(p.conviction)}
            <h3>${p.title}</h3>
            <p class="summary">${p.summary}</p>
          </span>
          <span class="expand-hint">Read</span>
        </summary>
        <div class="article-body">${p.body}</div>
      </details>`
    )
    .join("");

  // If arriving via a #id link from the home page preview, open that entry.
  if (location.hash) {
    const target = document.getElementById(location.hash.slice(1));
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
