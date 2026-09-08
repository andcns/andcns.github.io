(function () {
  const ROOT = "./assets/images/lumberjill/";
  const media = {
    hero: `${ROOT}ui.webp`,
    jill: `${ROOT}character-01.webp`,
    jack: `${ROOT}character-02.webp`,
    preprodData: `${ROOT}preproduction-board-v2.b64.txt`,
    jobBoardData: `${ROOT}job-board.b64.txt`
  };

  const normalizeTitle = (value) => (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  const zoomImage = (src, alt, className = "") => `
    <button class="zoomable-image ${className}" type="button" data-zoom-src="${src}" data-zoom-caption="${alt}" aria-label="Enlarge ${alt}">
      <img src="${src}" alt="${alt}" loading="lazy" />
      <span class="zoom-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" focusable="false">
          <circle cx="10.5" cy="10.5" r="6.5"></circle>
          <path d="M15.5 15.5 20 20"></path>
          <path d="M10.5 7.5v6M7.5 10.5h6"></path>
        </svg>
        <span>Zoom</span>
      </span>
    </button>`;

  const b64Figure = (path, alt, caption, className = "") => `
    <figure class="lj-figure lj-b64-figure ${className}">
      <button class="zoomable-image lj-b64-image" type="button" data-b64-path="${path}" data-zoom-caption="${alt}" aria-label="Enlarge ${alt}" disabled>
        <span class="lj-image-loading technical-label">Loading image…</span>
        <img alt="${alt}" loading="lazy" />
        <span class="zoom-hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="M15.5 15.5 20 20"></path><path d="M10.5 7.5v6M7.5 10.5h6"></path></svg><span>Zoom</span>
        </span>
      </button>
      <figcaption>${caption}</figcaption>
    </figure>`;

  const caseStudyHtml = `
    <div class="lj-case-study">
      <section class="lj-section" aria-labelledby="lj-context-title">
        <header class="lj-section-head">
          <p class="lj-index">01</p>
          <div>
            <p class="technical-label">Team production / Visual ownership</p>
            <h3 id="lj-context-title">Owning the visual side of a pipeline I was still learning.</h3>
          </div>
          <p>LumberJill was a four-person mobile management-game vertical slice. I joined as UI Designer and Character Artist, then took responsibility for much of the player-facing visual language: early UI planning, the reusable interface style, both main characters, and getting that work functioning inside Unity.</p>
        </header>
        <div class="lj-stat-strip" aria-label="LumberJill project summary">
          <div><span>Role</span><strong>UI Designer · Character Artist</strong></div>
          <div><span>Engine</span><strong>Unity 6</strong></div>
          <div><span>Target</span><strong>Android · Fixed isometric</strong></div>
          <div><span>Team</span><strong>4 people · Scrum-based workflow</strong></div>
        </div>
      </section>

      <section class="lj-section" aria-labelledby="lj-authorship-title">
        <header class="lj-section-head">
          <p class="lj-index">02</p>
          <div>
            <p class="technical-label">Authorship / Team boundaries</p>
            <h3 id="lj-authorship-title">What I owned, and what belonged to the rest of the team.</h3>
          </div>
          <p>This was collaborative work, so the boundary matters. My contribution was the interface and character art, plus the Unity-side implementation and iteration of those assets — not the underlying gameplay programming.</p>
        </header>
        <div class="lj-ownership-grid">
          <article class="lj-ownership-card">
            <p class="technical-label">Authored / Owned by me</p>
            <h4>Visual production and integration</h4>
            <ul>
              <li>UI direction, layout sketches, mock-ups and the modular wood-themed visual language.</li>
              <li>Final UI art across the HUD, storage, job board, navigation and progression screens.</li>
              <li>Jack and Jill: low-poly modelling, hand-painted texturing and character presentation.</li>
              <li>Unity UI integration using anchors, layout groups and content-size fitters where needed.</li>
              <li>Mobile readability, character silhouette and animation-readability testing in-engine.</li>
              <li>Art-side iteration as the programmer's systems came online.</li>
            </ul>
          </article>
          <article class="lj-ownership-card lj-disclosure">
            <p class="technical-label">Team / Not authored by me</p>
            <h4>Collaborative production</h4>
            <ul>
              <li>Abi owned the core gameplay programming and systems design, including the production pipeline and resource-management logic.</li>
              <li>Jamie produced the product models, implemented the level, built the stock-market panel logic and developed the tutorial.</li>
              <li>Seb produced environment props and handled much of the asset organisation, cleanup and Blender-to-Unity export preparation.</li>
              <li>Sprint planning, integration and final delivery were shared team responsibilities.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="lj-section" aria-labelledby="lj-preprod-title">
        <header class="lj-section-head">
          <p class="lj-index">03</p>
          <div>
            <p class="technical-label">Pre-production → final look</p>
            <h3 id="lj-preprod-title">The rough sketches are part of the story.</h3>
          </div>
          <p>I started with quick notes around resource hierarchy, thumb-friendly navigation, customer orders and storage. Those ideas became a proper screen mock-up, then a reusable kit of wood panels and icons, and finally the interfaces used inside the game.</p>
        </header>

        ${b64Figure(media.preprodData, "LumberJill UI process board showing original sketch, mock-up, reusable UI elements and final storage screen", "Original sketch → mock-up → reusable UI kit → final storage screen", "lj-process-board")}

        <div class="lj-final-compare">
          <article class="lj-copy-card">
            <p class="technical-label">What carried through</p>
            <h4>Hierarchy first, styling second.</h4>
            <p>The early sketch already established the main resource bar, order area, storage access and route into the lumber yard. The styling changed heavily, but the hierarchy survived because it was solving the right interaction problems before I worried about polish.</p>
          </article>
          ${b64Figure(media.jobBoardData, "Final LumberJill job board interface implemented in the workshop", "Final job-board implementation", "lj-final-shot")}
        </div>
      </section>

      <section class="lj-section" aria-labelledby="lj-system-title">
        <header class="lj-section-head">
          <p class="lj-index">04</p>
          <div>
            <p class="technical-label">UI system / Unity integration</p>
            <h3 id="lj-system-title">The interface became a kit, not a collection of one-off screens.</h3>
          </div>
          <p>I reused the same wood frames, arrows, paper notes, warm palette and outline treatment across different player-facing systems. That gave the game a consistent identity and made it much easier to adapt screens while the underlying gameplay was still changing.</p>
        </header>
        <div class="lj-system-notes">
          <article><span>01</span><strong>Design</strong><p>Sketch information hierarchy and touch-friendly routes before polishing.</p></article>
          <article><span>02</span><strong>Build the kit</strong><p>Create reusable panels, arrows, notes and icon treatments instead of redrawing each menu.</p></article>
          <article><span>03</span><strong>Integrate</strong><p>Set up the visual side in Unity and adapt it to systems owned by the programmer.</p></article>
          <article><span>04</span><strong>Test in context</strong><p>Check scaling, readability and interaction from the actual mobile/isometric presentation.</p></article>
        </div>
        <article class="lj-role-note">
          <p class="technical-label">What changed for me</p>
          <p>This was one of the projects that made me stop treating implementation as something that happened after the art was finished. I used Unity's simulator to test UI scalability and readability, and kept iterating until the work made sense inside the live game rather than only in a mock-up.</p>
        </article>
      </section>

      <section class="lj-section" aria-labelledby="lj-character-title">
        <header class="lj-section-head">
          <p class="lj-index">05</p>
          <div>
            <p class="technical-label">Character art / Mobile constraints</p>
            <h3 id="lj-character-title">Simple characters designed for the camera that mattered.</h3>
          </div>
          <p>I built Jack and Jill in a deliberately low-poly, PS1-inspired style, around a roughly 1K-polygon target with 512×512 textures. The aim was readability and consistency with the game, not close-up character complexity.</p>
        </header>
        <div class="lj-character-grid">
          <figure class="lj-figure">${zoomImage(media.jill, "Jill low-poly character render")}<figcaption>Jill · final character</figcaption></figure>
          <figure class="lj-figure">${zoomImage(media.jack, "Jack low-poly character render")}<figcaption>Jack · final character</figcaption></figure>
        </div>
        <article class="lj-copy-card">
          <p class="technical-label">In-engine iteration</p>
          <h4>The asset was only finished when it read properly in play.</h4>
          <p>I repeatedly checked silhouette readability, materials and animation smoothness from the fixed isometric gameplay camera. That pushed me toward judging assets by how well they serve the game rather than by how impressive they look in isolation.</p>
        </article>
      </section>

      <section class="lj-section" aria-labelledby="lj-team-title">
        <header class="lj-section-head">
          <p class="lj-index">06</p>
          <div>
            <p class="technical-label">SCRUM / Collaboration</p>
            <h3 id="lj-team-title">The project that made Agile stop feeling theoretical.</h3>
          </div>
          <p>We attempted to work with Scrum through sprints, meetings, task ownership and a backlog. In practice we did not apply it consistently enough. Sprint goals were often loose, some dependencies surfaced too late, and uneven participation across the four-person team put extra pressure on the rest of us.</p>
        </header>
        <div class="lj-team-grid">
          <article>
            <p class="technical-label">What worked</p>
            <h4>We still came very close to the intended vertical slice.</h4>
            <p>The main loop was there: buy lumber, process it through machines, build products and deliver them to customers. I am proud of how much of the intended visual identity made it into the playable build.</p>
          </article>
          <article>
            <p class="technical-label">What I learned</p>
            <h4>Meetings alone do not make a team Agile.</h4>
            <p>I came away understanding why clear sprint goals, visible blockers, realistic scope and active participation from every discipline matter. When those things slip, art and code dependencies compound very quickly.</p>
          </article>
        </div>
      </section>

      <section class="lj-section lj-reflection" aria-labelledby="lj-reflection-title">
        <header class="lj-section-head">
          <p class="lj-index">07</p>
          <div>
            <p class="technical-label">Outcome / Reflection</p>
            <h3 id="lj-reflection-title">Not a perfect production, but one I learned a lot from.</h3>
          </div>
          <p>The final build was not perfect: we overscoped, optimisation needed more work and a late shop-system regression blocked part of the tutorial. We were still very close to a complete vertical slice, and I am proud of the art and of my capacity to adapt and keep integrating work as the project changed around me.</p>
        </header>
        <div class="lj-reflection-grid">
          <article>
            <p class="technical-label">What I am proud of</p>
            <h4>Taking visual ownership.</h4>
            <p>I moved from rough sketches to a consistent UI language and two finished game characters, then carried that work into Unity instead of stopping at asset creation.</p>
          </article>
          <article>
            <p class="technical-label">Why it matters now</p>
            <h4>A useful step toward Technical Art.</h4>
            <p>LumberJill made me more comfortable moving between art production, engine integration and collaboration with programmers. It helped me realise that I enjoy the point where artistic intent has to survive contact with a real system.</p>
          </article>
        </div>
        <div class="lj-links" aria-label="LumberJill project links">
          <a href="https://abishekr.itch.io/lumberjill" target="_blank" rel="noreferrer">View on itch.io <span aria-hidden="true">↗</span></a>
          <a href="https://www.youtube.com/watch?v=X7rkKBnHKHw" target="_blank" rel="noreferrer">Watch full demo <span aria-hidden="true">↗</span></a>
        </div>
        <div class="lj-credits" aria-label="LumberJill team credits">
          <p class="technical-label">Team credits / LumberJacks</p>
          <div class="lj-credit-grid">
            <div><strong>Andrei</strong><span>UI Design · Character Art · Unity integration</span></div>
            <div><strong>Abi</strong><span>Programming · Systems Design</span></div>
            <div><strong>Jamie</strong><span>Product Art · Level Design · Tutorial / Stock Market</span></div>
            <div><strong>Seb</strong><span>Environment Props · Asset Pipeline</span></div>
          </div>
        </div>
      </section>
    </div>`;

  async function hydrateB64Images(root) {
    const targets = root.querySelectorAll("[data-b64-path]");
    for (const button of targets) {
      if (button.dataset.b64Loaded === "true") continue;
      try {
        const response = await fetch(button.dataset.b64Path, { cache: "force-cache" });
        if (!response.ok) throw new Error("Image data unavailable");
        const b64 = (await response.text()).trim();
        const src = `data:image/webp;base64,${b64}`;
        const image = button.querySelector("img");
        image.src = src;
        button.dataset.zoomSrc = src;
        button.dataset.b64Loaded = "true";
        button.disabled = false;
        const loading = button.querySelector(".lj-image-loading");
        if (loading) loading.remove();
      } catch (error) {
        const loading = button.querySelector(".lj-image-loading");
        if (loading) loading.textContent = "Image unavailable";
      }
    }
  }

  function restoreDefaultPlaceholder(host) {
    if (!host) return;
    host.className = "dialog-placeholder";
    host.innerHTML = `<p class="technical-label">Case study / Next implementation pass</p><p>The full visual breakdown, problem, solution and contribution sections will be assembled with you project by project.</p>`;
  }

  function syncDialog() {
    const title = document.querySelector("#dialog-title");
    const hero = document.querySelector("#dialog-hero");
    const label = document.querySelector("#dialog-label");
    const summary = document.querySelector("#dialog-summary");
    const meta = document.querySelector("#dialog-meta");
    const host = document.querySelector(".dialog-placeholder, .lj-case-study-host, .rd-case-study-host, .dialog-case-study-host, .cs-case-study-host");
    if (!title || !hero || !host) return;

    const isLumberJill = normalizeTitle(title.textContent) === "lumberjilltherpg";
    if (isLumberJill) {
      hero.innerHTML = zoomImage(media.hero, "LumberJill final UI and workshop presentation", "lj-hero-image");
      label.textContent = "UI Design · Character Art · Unity Integration";
      summary.textContent = "A four-person mobile management-game vertical slice where I owned the UI and character art, developed the visual language, and carried that work from rough pre-production through Unity integration and mobile testing.";
      meta.innerHTML = `
        <div><dt>Role</dt><dd>UI Designer · Character Artist</dd></div>
        <div><dt>Tools</dt><dd>Unity 6 · Blender · Substance 3D Painter · Photoshop · Illustrator</dd></div>
        <div><dt>Outcome</dt><dd>Near-complete mobile vertical slice · Team production</dd></div>`;
      host.className = "lj-case-study-host";
      if (!host.querySelector(".lj-case-study")) host.innerHTML = caseStudyHtml;
      hydrateB64Images(host);
    } else if (host.classList.contains("lj-case-study-host")) {
      restoreDefaultPlaceholder(host);
    }
  }

  syncDialog();

  const title = document.querySelector("#dialog-title");
  if (title) new MutationObserver(syncDialog).observe(title, { childList: true, subtree: true });

  const dialog = document.querySelector("#project-dialog");
  if (dialog) {
    new MutationObserver(() => {
      if (!dialog.open) {
        const host = dialog.querySelector(".lj-case-study-host");
        if (host) restoreDefaultPlaceholder(host);
      } else {
        syncDialog();
      }
    }).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  }
})();
