(function () {
  const ROOT = "./assets/images/colosseum/";
  const media = {
    hero: `${ROOT}hero.webp`,
    all: `${ROOT}characters-all.webp`,
    wfFront: `${ROOT}wireframes-front.webp`,
    wfBack: `${ROOT}wireframes-back.webp`,
    arena1: `${ROOT}arena-duel.webp`,
    arena2: `${ROOT}arena-action.webp`,
    arena3: `${ROOT}arena-shield.webp`,
    demo: "./assets/video/colosseum/demo.mp4"
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

  const figure = (src, alt, caption, className = "") => `
    <figure class="ga-figure ${className}">
      ${zoomImage(src, alt)}
      <figcaption>${caption}</figcaption>
    </figure>`;

  const caseStudyHtml = `
    <div class="ga-case-study">
      <section class="ga-section" aria-labelledby="ga-overview-title">
        <header class="ga-section-head">
          <p class="ga-index">01</p>
          <div>
            <p class="technical-label">Global Game Jam 2026 / Visual direction</p>
            <h3 id="ga-overview-title">A readable arena built fast.</h3>
          </div>
          <p>Colosseum Ascendant was a team-made 2.5D arena prototype created for the 2026 Global Game Jam theme “Mask”. My focus was the visual direction, character production and a reusable art workflow that could hold together under jam constraints.</p>
        </header>
        <div class="ga-reel">
          <video controls playsinline preload="metadata" poster="${media.arena1}">
            <source src="${media.demo}" type="video/mp4" />
          </video>
        </div>
        <div class="ga-stat-strip" aria-label="Project summary">
          <div><span>Format</span><strong>2.5D arena action</strong></div>
          <div><span>Theme</span><strong>Mask</strong></div>
          <div><span>My focus</span><strong>Visual direction · Characters</strong></div>
          <div><span>Module grade</span><strong>85</strong></div>
        </div>
      </section>

      <section class="ga-section" aria-labelledby="ga-arena-title">
        <header class="ga-section-head">
          <p class="ga-index">02</p>
          <div>
            <p class="technical-label">Arena presentation / Readability</p>
            <h3 id="ga-arena-title">Keeping the fight readable.</h3>
          </div>
          <p>The project leaned into a PSX-inspired low-poly look, but the scene still had to communicate silhouettes, spacing and attacks instantly. The arena uses a simple side-on composition, strong separation between characters and background, and repeated architectural shapes so the combat stays visually clear.</p>
        </header>
        <div class="ga-gallery">
          ${figure(media.arena1, "Colosseum Ascendant arena duel in Unity", "Arena composition / player and enemy spacing")}
          ${figure(media.arena2, "Colosseum Ascendant action scene in Unity", "Combat readability during movement")}
          ${figure(media.arena3, "Colosseum Ascendant shield encounter in Unity", "Character silhouettes against the arena")}
        </div>
      </section>

      <section class="ga-section" aria-labelledby="ga-character-title">
        <header class="ga-section-head">
          <p class="ga-index">03</p>
          <div>
            <p class="technical-label">Character art / Reusable base</p>
            <h3 id="ga-character-title">Four characters from one production language.</h3>
          </div>
          <p>I authored four PSX-inspired low-poly characters, including enemy and boss variations. Rather than treating each as a separate sculpt, I built them around shared proportions, topology and a reusable base workflow so new variants could be produced quickly.</p>
        </header>
        <div class="ga-character-feature">
          ${figure(media.all, "Four Colosseum Ascendant character variants", "Final character set / shared production base")}
          <article class="ga-copy-card">
            <p class="technical-label">Production approach</p>
            <h4>Reuse the structure, spend time on identity.</h4>
            <p>The common base kept rigging and proportions predictable while costume, mask, silhouette and colour did the work of separating each role.</p>
            <ul>
              <li>Shared body proportions and low-poly topology.</li>
              <li>Reusable character base for fast enemy and NPC variants.</li>
              <li>Distinct masks and costume shapes to preserve readability.</li>
              <li>Built for rapid integration into the Unity jam build.</li>
            </ul>
          </article>
        </div>
        <div class="ga-wire-grid">
          ${figure(media.wfFront, "Front wireframes of Colosseum Ascendant character variants", "Front topology comparison")}
          ${figure(media.wfBack, "Back wireframes of Colosseum Ascendant character variants", "Back topology comparison")}
        </div>
      </section>

      <section class="ga-section" aria-labelledby="ga-boss-title">
        <header class="ga-section-head">
          <p class="ga-index">04</p>
          <div>
            <p class="technical-label">Hero asset / Boss variant</p>
            <h3 id="ga-boss-title">A stronger silhouette without breaking the base.</h3>
          </div>
          <p>The masked boss pushes the proportions and surface treatment further while staying compatible with the same overall character workflow. The result is deliberately rough and low-resolution: broad anatomy, chunky forms and painted texture information carry most of the identity.</p>
        </header>
        <div class="ga-character-feature">
          ${figure(media.hero, "Masked Colosseum Ascendant boss character", "Masked boss / PSX-inspired character treatment")}
          <article class="ga-copy-card">
            <p class="technical-label">What mattered</p>
            <h4>Shape first, detail second.</h4>
            <p>The style works because the silhouette reads before the texture does. The mask, waist shape, shoulder width and red cloth create the hierarchy; the pixelated texture supports it rather than trying to replace it.</p>
          </article>
        </div>
      </section>

      <section class="ga-section" aria-labelledby="ga-pcg-title">
        <header class="ga-section-head">
          <p class="ga-index">05</p>
          <div>
            <p class="technical-label">Geometry Nodes / Procedural environment</p>
            <h3 id="ga-pcg-title">The procedural breakdown is still being reconstructed.</h3>
          </div>
          <p>During the project I also built a Blender Geometry Nodes workflow for procedural environment scattering, reducing manual arena dressing before Unity integration. I no longer have the original presentation file, so I am rebuilding that system before showing it as finished evidence.</p>
        </header>
        <div class="ga-pending">
          <div class="ga-pending-panel">
            <p class="technical-label">Evidence pending</p>
            <h4>Artist-controlled scatter workflow.</h4>
            <p>The final pass will show the node graph, exposed controls and the before/after effect on environment iteration. Until that reconstruction is complete, this section is intentionally marked as pending rather than presenting an unsupported diagram.</p>
          </div>
          <article class="ga-copy-card">
            <p class="technical-label">Original purpose</p>
            <h4>Reduce repetitive dressing.</h4>
            <p>The tool was designed to distribute reusable environment pieces procedurally so I could spend less time hand-placing repeated assets and more time adjusting the arena as a whole.</p>
            <p>That was one of my first practical examples of a procedural system directly improving an art-production workflow.</p>
          </article>
        </div>
      </section>

      <section class="ga-section" aria-labelledby="ga-reflection-title">
        <header class="ga-section-head">
          <p class="ga-index">06</p>
          <div>
            <p class="technical-label">Outcome / Reflection</p>
            <h3 id="ga-reflection-title">A jam project that pushed me toward procedural Technical Art.</h3>
          </div>
          <p>The project received a module grade of 85. More importantly for my current direction, it showed me that reusable character structure and procedural environment tools could make visual production faster without giving up artistic control.</p>
        </header>
        <div class="ga-reflection-grid">
          <article>
            <p class="technical-label">What worked</p>
            <h4>Shared systems made the art faster.</h4>
            <p>The reusable character base let me create a small cast quickly while keeping the proportions and rigging predictable. The same thinking carried into the Geometry Nodes scatter workflow: identify repetition, then turn it into a controllable system.</p>
          </article>
          <article>
            <p class="technical-label">What I would improve</p>
            <h4>Document the procedural work as I build it.</h4>
            <p>The biggest missing piece is not the final game, but the technical evidence behind the environment workflow. Rebuilding it now is a useful reminder to capture node graphs, controls and iteration examples while the system is still active.</p>
          </article>
        </div>
        <div class="ga-links">
          <a href="https://globalgamejam.org/games/2026/colosseum-ascendant-6" target="_blank" rel="noreferrer">Global Game Jam page ↗</a>
          <a href="https://github.com/abinu2010/GGJ2k26" target="_blank" rel="noreferrer">Team source repository ↗</a>
        </div>
      </section>
    </div>`;

  function restoreDefaultPlaceholder(host) {
    if (!host) return;
    host.className = "dialog-placeholder";
    host.innerHTML = `
      <p class="technical-label">Case study / Next implementation pass</p>
      <p>The full visual breakdown, problem, solution and contribution sections will be assembled with you project by project.</p>`;
  }

  function syncDialog() {
    const title = document.querySelector("#dialog-title");
    const hero = document.querySelector("#dialog-hero");
    const label = document.querySelector("#dialog-label");
    const summary = document.querySelector("#dialog-summary");
    const meta = document.querySelector("#dialog-meta");
    const host = document.querySelector(".dialog-placeholder, .ga-case-study-host, .rd-case-study-host, .dialog-case-study-host, .cs-case-study-host, .lj-case-study-host");
    if (!title || !hero || !host) return;

    const isGladiator = normalizeTitle(title.textContent) === "gladiatorascendant";
    if (isGladiator) {
      hero.innerHTML = zoomImage(media.hero, "Masked Colosseum Ascendant boss character", "ga-hero-image");
      label.textContent = "Global Game Jam 2026 / Visual direction / Procedural workflow";
      summary.textContent = "A PSX-inspired 2.5D arena prototype where I led the visual direction, authored four low-poly character variants and used reusable/procedural workflows to speed up production.";
      meta.innerHTML = `
        <div><dt>Role</dt><dd>Visual Direction · Character Art · Procedural Environment Workflow</dd></div>
        <div><dt>Tools</dt><dd>Blender · Geometry Nodes · Unity · Photoshop · Mixamo</dd></div>
        <div><dt>Outcome</dt><dd>Global Game Jam 2026 · Playable team prototype · Module grade 85</dd></div>`;
      host.className = "ga-case-study-host";
      if (!host.querySelector(".ga-case-study")) host.innerHTML = caseStudyHtml;
    } else if (host.classList.contains("ga-case-study-host")) {
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
        const host = dialog.querySelector(".ga-case-study-host");
        if (host) restoreDefaultPlaceholder(host);
        dialog.querySelectorAll("video").forEach((video) => video.pause());
      } else {
        syncDialog();
      }
    }).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  }
})();
