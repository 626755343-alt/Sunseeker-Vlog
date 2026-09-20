function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function renderPrompt(prompt) {
  const keywords = prompt.keywords
    .map((keyword) => `<li class="keyword">${escapeHtml(keyword)}</li>`)
    .join('');

  return `
    <div class="topic-topline">
      <span class="category">${escapeHtml(prompt.category)}</span>
      <span class="topic-count">即兴模式</span>
    </div>
    <h2 id="prompt-title" class="prompt-title">${escapeHtml(prompt.title)}</h2>
    <p class="translation">${escapeHtml(prompt.translation)}</p>
    <section class="cue-group" aria-labelledby="keyword-label">
      <h3 id="keyword-label">关键词</h3>
      <ul class="keyword-list" aria-label="英文关键词">${keywords}</ul>
    </section>
    <section class="cue-group cue-group--split" aria-labelledby="starter-label">
      <h3 id="starter-label">Start with</h3>
      <p class="cue-text">${escapeHtml(prompt.starter)}</p>
    </section>
    <section class="cue-group cue-group--split" aria-labelledby="challenge-label">
      <h3 id="challenge-label">Challenge</h3>
      <p class="cue-text">${escapeHtml(prompt.challenge)}</p>
    </section>
  `;
}

