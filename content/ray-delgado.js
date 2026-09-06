(function () {
  const ROOT = "./assets/images/ray-delgado/";
  const media = {
    hero: `${ROOT}page-hero.webp`,
    reel: `${ROOT}project-reel.mp4`,
    reelPoster: `${ROOT}project-reel-poster.webp`,
    sketch: `${ROOT}concept-sketch.webp`,
    anatomyStudy: `${ROOT}anatomy-study.webp`,
    anatomySculpt: `${ROOT}anatomy-sculpt.webp`,
    finalMesh: `${ROOT}final-mesh.webp`,
    wireframe: `${ROOT}final-wireframe.webp`,
    materialFull: `${ROOT}material-full.webp`,
    materialDetail: `${ROOT}material-detail.webp`,
    baseColour: `${ROOT}base-colour-map.webp`,
    metallic: `${ROOT}metallic-map.webp`,
    normal: `${ROOT}normal-map.webp`,
    rigSketch: `${ROOT}rig-sketch.webp`,
    animator: `${ROOT}unity-animator.webp`,
    mocap: `${ROOT}tracker-mocap.webp`
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
    <figure class="rd-figure ${className}">
      ${zoomImage(src, alt)}
      <figcaption>${caption}</figcaption>
    </figure>`;

  const caseStudyHtml = `
    <div class="rd-case-study">
      <section class="rd-section" aria-labelledby="rd-reel-title">
        <header class="rd-section-head">
          <p class="rd-index">01</p>
          <div>
            <p class="technical-label">Animation showcase</p>
            <h3 id="rd-reel-title">Ray in motion.</h3>
          </div>
          <p>A 59-second animation cut showing the implemented locomotion, weapon handling, crouch and cover set. The rest of the page breaks down how I built the character and brought the animation pipeline together.</p>
        </header>
        <div class="rd-reel">
          <video controls playsinline preload="metadata" poster="${media.reelPoster}">
            <source src="${media.reel}" type="video/mp4" />
          </video>
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-design-title">
        <header class="rd-section-head">
          <p class="rd-index">02</p>
          <div>
            <p class="technical-label">Character design</p>
            <h3 id="rd-design-title">Designing a 70s private eye.</h3>
          </div>
          <p>I wanted Ray to read clearly from a third-person camera: broad shapes, a sharp jaw, moustache, aviators and a loud floral shirt. I worked through the design on paper first, then used the blockout and sculpt to push the proportions before committing to topology.</p>
        </header>
        <div class="rd-design-grid">
          ${figure(media.sketch, "Original Ray Delgado character sketch showing front, side and facial studies", "Original character design / proportion study", "rd-design-main")}
          <div class="rd-design-stack">
            ${figure(media.anatomyStudy, "Colour-coded anatomy and proportion blockout for Ray Delgado", "Anatomy blockout")}
            ${figure(media.anatomySculpt, "High-resolution anatomy sculpt of Ray Delgado from multiple views", "High-resolution sculpt")}
          </div>
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-production-title">
        <header class="rd-section-head">
          <p class="rd-index">03</p>
          <div>
            <p class="technical-label">Sculpt / Game-ready mesh</p>
            <h3 id="rd-production-title">From sculpt to game-ready mesh.</h3>
          </div>
          <p>This was the first project where sculpting became a real part of my workflow. I retopologised the final form by hand, kept extra loops around the face and main deformation areas, then unwrapped the mesh and baked the high-poly normal detail down to a roughly 60K-triangle game asset.</p>
        </header>
        <div class="rd-pair rd-production-pair">
          ${figure(media.finalMesh, "Final untextured Ray Delgado character mesh in Blender", "Final game mesh")}
          ${figure(media.wireframe, "Final Ray Delgado topology wireframe in Blender", "Manual retopology / wireframe")}
        </div>
        <div class="rd-stat-strip" aria-label="A proper character workflow summary">
          <div><span>Target</span><strong>Real-time third-person</strong></div>
          <div><span>Final mesh</span><strong>≈60K tris</strong></div>
          <div><span>Pipeline</span><strong>Sculpt → Retopo → Bake</strong></div>
          <div><span>Primary tools</span><strong>Blender · Substance Painter</strong></div>
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-material-title">
        <header class="rd-section-head">
          <p class="rd-index">04</p>
          <div>
            <p class="technical-label">Cloth simulation / Materials</p>
            <h3 id="rd-material-title">Cloth simulation, then high-to-low baking.</h3>
          </div>
          <p>I used Blender cloth simulation to establish the shirt folds, then applied and retopologised the result. Most normal detail was baked from the high-poly meshes onto the low-poly character in Substance Painter, which I also used for the final PBR texturing.</p>
        </header>
        <div class="rd-material-feature">
          ${figure(media.materialFull, "Full Ray Delgado material presentation in Blender", "Final textured character")}
          <article class="rd-copy-card">
            <p class="technical-label">Material separation</p>
            <h4>Keeping the materials readable.</h4>
            <p>I kept most small-form detail in the high-poly meshes and transferred it to the game asset through normal baking in Substance Painter.</p>
            <p>The textures stay stylised, but I still wanted fabric, denim, leather, metal and skin to read as different materials at a glance.</p>
          </article>
        </div>
        <div class="rd-detail-wide">
          ${figure(media.materialDetail, "Close-up of Ray Delgado floral shirt, holster, skin and denim materials", "Material close-up")}
        </div>
        <div class="rd-map-grid">
          ${figure(media.baseColour, "Ray Delgado base colour texture atlas", "Base colour")}
          ${figure(media.metallic, "Ray Delgado metallic texture map", "Metallic")}
          ${figure(media.normal, "Ray Delgado normal texture map", "Normal")}
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-animation-title">
        <header class="rd-section-head">
          <p class="rd-index">05</p>
          <div>
            <p class="technical-label">Rigging / Retargeting / Unity</p>
            <h3 id="rd-animation-title">Bringing different animation sources onto one character.</h3>
          </div>
          <p>The final character used a Mixamo humanoid rig. I combined Mixamo animations with tracker-based mocap, retargeted the captured clips onto Ray in Blender with Rokoko's retargeting add-on, then organised the full set in Unity using Animator layers.</p>
        </header>
        <div class="rd-animation-grid">
          ${figure(media.rigSketch, "Early humanoid rig planning sketch for Ray Delgado", "Early rig planning — final character used a Mixamo humanoid rig")}
          ${figure(media.animator, "Unity Animator Controller for Ray Delgado showing locomotion, crouch, cover and shooting states", "Implemented Unity Animator Controller", "rd-animator")}
        </div>
        <div class="rd-flow" role="img" aria-label="Ray Delgado animation pipeline">
          <div><span>Animation sources</span><strong>Mixamo · Tracker mocap</strong></div>
          <i>→</i>
          <div><span>Retargeting</span><strong>Rokoko · Blender</strong></div>
          <i>→</i>
          <div><span>Engine setup</span><strong>Unity Animator</strong></div>
        </div>
        <div class="rd-mocap-grid" style="margin-top: 36px;">
          ${figure(media.mocap, "Tracker-based motion-capture test performed for the Ray Delgado project", "Tracker mocap test", "rd-mocap-shot")}
          <article class="rd-copy-card rd-mocap-copy">
            <p class="technical-label">Tracker mocap</p>
            <h4>Captured, retargeted, then combined with Mixamo.</h4>
            <p>I recorded tracker-based mocap for part of the set and used Mixamo where it made sense to fill out the library. Retargeting the captured clips in Blender gave me a much clearer understanding of how animation from different sources can be prepared for one character before engine implementation.</p>
          </article>
        </div>
      </section>

      <section class="rd-section rd-reflection" aria-labelledby="rd-reflection-title">
        <header class="rd-section-head">
          <p class="rd-index">06</p>
          <div>
            <p class="technical-label">Reflection</p>
            <h3 id="rd-reflection-title">Why this project still matters to my Technical Art direction.</h3>
          </div>
          <p>I chose this module while I was still seriously considering character design and modelling, before I had fully committed to Technical Art. I am glad I did — it gave me practical experience across a character pipeline I am still interested in.</p>
        </header>
        <div class="rd-reflection-grid">
          <article>
            <p class="technical-label">What I learned</p>
            <h4>My first end-to-end character workflow</h4>
            <p>It was the first time I used sculpting seriously in my workflow, and it pushed me into cloth simulation, character design, retopology, high-to-low baking, mocap retargeting and engine animation setup as one connected process.</p>
          </article>
          <article>
            <p class="technical-label">Where it connects to tech art</p>
            <h4>Useful context for character-focused TA work</h4>
            <p>The project also let me keep the artistic side of my work while moving toward Technical Art. Having worked through the character pipeline myself gives me useful context for future work around rigging, retargeting, animation systems and artist-facing character tools. If I revisited Ray, I would first refine the shoulder and hip skinning and add basic facial controls.</p>
          </article>
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
    const host = document.querySelector(".dialog-placeholder, .rd-case-study-host, .dialog-case-study-host, .cs-case-study-host");
    if (!title || !hero || !host) return;

    const isRay = normalizeTitle(title.textContent) === "raydelgado";
    if (isRay) {
      hero.innerHTML = zoomImage(media.hero, "Ray Delgado hero render — dual-pistol pose against a stylised Miami sunset", "rd-hero-image");
      label.textContent = "Character art / Real-time animation";
      summary.textContent = "A stylised 1970s Miami private investigator built end to end: character design, sculpting, retopology, Substance texturing, mocap/Mixamo retargeting and Unity animation implementation.";
      meta.innerHTML = `
        <div><dt>Role</dt><dd>Character Artist · Animation Integration</dd></div>
        <div><dt>Tools</dt><dd>Blender · Substance 3D Painter · Unity · Mixamo · Rokoko</dd></div>
        <div><dt>Outcome</dt><dd>Game-ready character · ≈60K tris · Unity animation set</dd></div>`;
      host.className = "rd-case-study-host";
      if (!host.querySelector(".rd-case-study")) host.innerHTML = caseStudyHtml;
    } else if (host.classList.contains("rd-case-study-host")) {
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
        const host = dialog.querySelector(".rd-case-study-host");
        if (host) restoreDefaultPlaceholder(host);
        dialog.querySelectorAll("video").forEach((video) => video.pause());
      } else {
        syncDialog();
      }
    }).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  }
})();
