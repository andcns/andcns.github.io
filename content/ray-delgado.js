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
          <p>A 59-second cut of the final Unity character controller: locomotion, aiming, shooting, crouching and cover. The process is broken down below.</p>
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
            <h3 id="rd-design-title">Designing a 70s action hero.</h3>
          </div>
          <p>I wanted Ray to read immediately: broad shapes, a sharp jaw, moustache, aviators and a loud floral shirt. I drew the design first, then used the blockout and sculpt to push the proportions before committing to topology.</p>
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
          <p>This was the first project where sculpting became a real part of my workflow. I retopologised the final form by hand, kept extra loops around the face and deformation areas, then unwrapped and baked the high-poly detail to a roughly 60K-triangle game mesh.</p>
        </header>
        <div class="rd-pair rd-production-pair">
          ${figure(media.finalMesh, "Final untextured Ray Delgado character mesh in Blender", "Final game mesh")}
          ${figure(media.wireframe, "Final Ray Delgado topology wireframe in Blender", "Manual retopology / wireframe")}
        </div>
        <div class="rd-stat-strip" aria-label="A proper character workflow summary">
          <div><span>Target</span><strong>Real-time third-person</strong></div>
          <div><span>Final mesh</span><strong>≈60K tris</strong></div>
          <div><span>Pipeline</span><strong>Sculpt → Retopo → Bake</strong></div>
          <div><span>Primary tools</span><strong>Blender · Substance</strong></div>
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-material-title">
        <header class="rd-section-head">
          <p class="rd-index">04</p>
          <div>
            <p class="technical-label">Cloth simulation / Materials</p>
            <h3 id="rd-material-title">Using cloth simulation instead of sculpting every fold.</h3>
          </div>
          <p>I built the shirt with Blender cloth simulation to get more natural folds, then applied and retopologised the result. Most of the surface detail was transferred from high to low by baking the normal maps in Substance Painter, where I also textured the final character.</p>
        </header>
        <div class="rd-material-feature">
          ${figure(media.materialFull, "Full Ray Delgado material presentation in Blender", "Final textured character")}
          <article class="rd-copy-card">
            <p class="technical-label">Material separation</p>
            <h4>Keeping the materials readable.</h4>
            <p>I used the high-poly sculpt to carry most of the small form and surface detail, then baked that information onto the game mesh in Substance Painter.</p>
            <p>From there I kept the material treatment stylised but made sure fabric, denim, leather, metal and skin still read as different surfaces.</p>
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
            <p class="technical-label">Animation / Retargeting / Unity</p>
            <h3 id="rd-animation-title">Building Ray's animation set.</h3>
          </div>
          <p>I combined Mixamo animations with tracker-based mocap. I retargeted the mocap clips onto Ray in Blender using the free Rokoko retargeting add-on, then brought the animation set into Unity and organised locomotion, cover and upper-body weapon actions through Animator layers.</p>
        </header>
        <div class="rd-animation-grid">
          ${figure(media.rigSketch, "Pre-production humanoid rig planning sketch for Ray Delgado", "Rig planning / pre-production")}
          ${figure(media.animator, "Unity Animator Controller for Ray Delgado showing locomotion, crouch, cover and shooting states", "Implemented Unity Animator Controller", "rd-animator")}
        </div>
        <div class="rd-flow" role="img" aria-label="Simplified Ray Delgado animation state structure">
          <div><span>Base locomotion</span><strong>Idle · Walk · Run</strong></div>
          <i>→</i>
          <div><span>Context</span><strong>Crouch · Cover</strong></div>
          <i>+</i>
          <div><span>Upper body</span><strong>Draw · Aim · Shoot</strong></div>
        </div>
      </section>

      <section class="rd-section" aria-labelledby="rd-mocap-title">
        <header class="rd-section-head">
          <p class="rd-index">06</p>
          <div>
            <p class="technical-label">Motion capture</p>
            <h3 id="rd-mocap-title">Using tracker mocap alongside Mixamo.</h3>
          </div>
          <p>I recorded tracker-based mocap for part of the animation set, then retargeted those clips in Blender with Rokoko's free retargeting add-on. Mixamo filled out the rest of the motion library before everything was assembled in Unity.</p>
        </header>
        <div class="rd-mocap-grid">
          ${figure(media.mocap, "Tracker-based motion-capture test performed for the Ray Delgado project", "Tracker mocap test", "rd-mocap-shot")}
          <article class="rd-copy-card rd-mocap-copy">
            <p class="technical-label">What it added</p>
            <h4>A more hands-on animation pipeline.</h4>
            <p>Using my own captured motion made the retargeting stage much easier to understand. It also showed me how different animation sources can be cleaned up, combined and prepared for the same character.</p>
          </article>
        </div>
      </section>

      <section class="rd-section rd-reflection" aria-labelledby="rd-reflection-title">
        <header class="rd-section-head">
          <p class="rd-index">07</p>
          <div>
            <p class="technical-label">Reflection</p>
            <h3 id="rd-reflection-title">This project helped me keep the art side of my work alive.</h3>
          </div>
          <p>I chose this module because I was still exploring character design and modelling before I fully committed to technical art. I am glad I did: it gave me a much better understanding of a pipeline I am still interested in.</p>
        </header>
        <div class="rd-reflection-grid">
          <article>
            <p class="technical-label">What I learned</p>
            <h4>A proper character workflow</h4>
            <p>It was my first time using sculpting seriously in a character workflow, and it pushed me into cloth simulation, character design, retopology, high-to-low baking, mocap retargeting and animation implementation instead of treating them as separate exercises.</p>
          </article>
          <article>
            <p class="technical-label">Where it connects to tech art</p>
            <h4>Art knowledge I can build tools around</h4>
            <p>It also meant I kept some of my artistic identity while moving toward technical art. Understanding the character pipeline from sculpt through retargeting and engine setup gives me useful context for future TA work around rigging, animation systems and tools for character artists. If I revisited Ray, I would start by refining the shoulder and hip skinning and adding basic facial controls.</p>
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
      summary.textContent = "A stylised 1970s Miami private investigator I designed and built from sculpt to game-ready character, then animated with a mix of mocap and Mixamo motions before implementing the final set in Unity.";
      meta.innerHTML = `
        <div><dt>Role</dt><dd>Character Artist · Animation Integration</dd></div>
        <div><dt>Tools</dt><dd>Blender · Substance Painter · Unity · Mixamo · Rokoko</dd></div>
        <div><dt>Outcome</dt><dd>Game-ready character + retargeted animation set · ≈60K tris</dd></div>`;
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
