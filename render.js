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

/* ---- Home page: latest N publications, preview only ---- */
function renderPreviewColumn(containerId, limit = 5) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const posts = sortedByDate(POSTS).slice(0, limit);

  if (posts.length === 0) {
    el.innerHTML = `<p class="empty-note">Nothing published yet.</p>`;
    return;
  }

  el.innerHTML = posts
    .map(
      (p) => `
      <div class="pub-item">
        <div class="pub-date">${formatDate(p.date)}</div>
        <h3><a href="research.html#${p.id}">${p.title}</a></h3>
        <p class="summary">${p.summary}</p>
      </div>`
    )
    .join("");
}

/* ---- Research page: full expandable list of every publication ---- */
function renderArticleList(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const posts = sortedByDate(POSTS);

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
