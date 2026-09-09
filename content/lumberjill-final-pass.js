(function () {
  const ROOT = './assets/images/lumberjill/';

  const style = document.createElement('style');
  style.textContent = `
    .lj-language-stage{margin:2rem 0 2.25rem;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr);gap:1rem;align-items:stretch}
    .lj-language-card{margin:0;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.025);overflow:hidden;min-width:0}
    .lj-language-card .zoomable-image{display:block;width:100%;height:100%;min-height:310px;background:#0f1116;border:0;padding:0;position:relative;overflow:hidden;cursor:zoom-in}
    .lj-language-card img{display:block;width:100%;height:100%;min-height:310px;object-fit:contain;background:#0d0f13;image-rendering:auto}
    .lj-language-card figcaption{padding:.8rem .9rem 1rem;border-top:1px solid rgba(255,255,255,.09);font-size:.82rem;line-height:1.45;color:var(--muted,#9ca0aa)}
    .lj-language-card figcaption strong{display:block;color:var(--text,#f4f1ea);font-size:.94rem;margin-bottom:.25rem}
    .lj-language-card.is-atlas img{object-fit:contain;background:#08090b}
    .lj-language-intro{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:1.25rem;margin-bottom:.2rem}
    .lj-language-intro h4{margin:.15rem 0 0;font-size:clamp(1.2rem,2.2vw,1.7rem)}
    .lj-language-intro p{margin:0;color:var(--muted,#9ca0aa);line-height:1.7}
    @media (max-width:840px){.lj-language-stage,.lj-language-intro{grid-template-columns:1fr}.lj-language-card .zoomable-image,.lj-language-card img{min-height:220px}}
  `;
  document.head.appendChild(style);

  async function loadB64(path) {
    const res = await fetch(path, { cache: 'force-cache' });
    if (!res.ok) throw new Error('media unavailable');
    return `data:image/webp;base64,${(await res.text()).trim()}`;
  }

  async function hydrate(button, path) {
    try {
      const src = await loadB64(path);
      const img = button.querySelector('img');
      img.src = src;
      button.dataset.zoomSrc = src;
      button.disabled = false;
      const loading = button.querySelector('.lj-final-loading');
      if (loading) loading.remove();
    } catch (_) {
      const loading = button.querySelector('.lj-final-loading');
      if (loading) loading.textContent = 'Image unavailable';
    }
  }

  function mediaFigure(path, alt, title, caption, extra = '') {
    const fig = document.createElement('figure');
    fig.className = `lj-language-card ${extra}`;
    fig.innerHTML = `
      <button class="zoomable-image" type="button" aria-label="Enlarge ${alt}" data-zoom-caption="${alt}" disabled>
        <span class="lj-final-loading technical-label" style="position:absolute;inset:0;display:grid;place-items:center;z-index:2">Loading image…</span>
        <img alt="${alt}" loading="lazy" />
        <span class="zoom-hint" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="M15.5 15.5 20 20"></path><path d="M10.5 7.5v6M7.5 10.5h6"></path></svg><span>Zoom</span></span>
      </button>
      <figcaption><strong>${title}</strong>${caption}</figcaption>`;
    hydrate(fig.querySelector('button'), path);
    return fig;
  }

  function patch() {
    const root = document.querySelector('.lj-case-study');
    if (!root || root.dataset.finalPass === 'true') return;
    root.dataset.finalPass = 'true';

    const sections = root.querySelectorAll('.lj-section');
    const system = Array.from(sections).find(s => s.querySelector('#lj-system-title'));
    if (system) {
      const title = system.querySelector('#lj-system-title');
      const headCopy = system.querySelector('.lj-section-head > p:last-child');
      if (title) title.textContent = 'The first screen became a visual language, then a reusable UI kit.';
      if (headCopy) headCopy.textContent = 'The Storage screen was the point where the wood-frame language clicked. I carried those proportions, warm materials, outlined arrows and sign motifs into a reusable atlas, then adapted the same components across the rest of the player-facing UI in Unity.';

      const notes = system.querySelector('.lj-system-notes');
      if (notes && !system.querySelector('.lj-language-stage')) {
        const stage = document.createElement('div');
        stage.className = 'lj-language-stage';
        stage.innerHTML = `<div class="lj-language-intro"><div><p class="technical-label">Visual language / First established screen</p><h4>Storage set the tone.</h4></div><p>This was the first interface I pushed far enough to establish the look of the project. Instead of treating it as a one-off menu, I pulled the successful pieces back out into reusable components for later screens.</p></div>`;
        stage.appendChild(mediaFigure(`${ROOT}storage-ui-final.b64.txt`, 'LumberJill Storage interface establishing the wood-themed UI language', 'Storage UI — visual language established', 'The first finished panel to lock in the wood framing, hanging sign, warm palette and inset presentation.'));
        stage.appendChild(mediaFigure(`${ROOT}ui-atlas-final.b64.txt`, 'LumberJill reusable UI atlas with wood panels, arrows and symbols', 'Reusable UI atlas', 'Panels, arrows, symbols and navigation pieces extracted into a consistent kit for use across later interfaces.', 'is-atlas'));
        notes.before(stage);
      }
    }

    const team = Array.from(sections).find(s => s.querySelector('#lj-team-title'));
    if (team) {
      const p = team.querySelector('.lj-section-head > p:last-child');
      if (p) p.textContent = 'We attempted to work with Scrum through sprints, meetings, task ownership and a backlog. In practice we did not apply it consistently enough. Sprint goals were often loose, dependencies surfaced too late, and uneven participation and late hand-offs put additional pressure on delivery.';
    }

    const reflection = Array.from(sections).find(s => s.querySelector('#lj-reflection-title'));
    if (reflection) {
      const p = reflection.querySelector('.lj-section-head > p:last-child');
      if (p) p.textContent = 'The final build was not perfect: we overscoped, optimisation needed more work and a late shop-system regression blocked part of the tutorial. We still came very close to the intended vertical slice, and I am proud of the art, the visual consistency we achieved and my ability to keep adapting and integrating work as the project changed.';
    }
  }

  const observer = new MutationObserver(patch);
  observer.observe(document.body, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', patch);
  patch();
})();
