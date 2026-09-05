(function () {
  const ROOT = "./assets/images/cybershadows/";

  const media = {
    hero: `${ROOT}hero.webp`,
    baseCharacter: `${ROOT}base-character.webp`,
    shaderImplementation: `${ROOT}shader-implementation.webp`,
    celShader: `${ROOT}cel-shader-graph.webp`,
    outlineShader: `${ROOT}outline-shader-graph.webp`,
    keikoRig: `${ROOT}keiko-rig-physics.webp`,
    meleeRobRig: `${ROOT}melee-rob-rig.webp`,
    melee: `${ROOT}melee-gameplay.webp`,
    ranged: `${ROOT}ranged-gameplay.webp`,
    enemyTree: `${ROOT}enemy-behaviour-tree.webp`,
    levelTorii: `${ROOT}level-torii.webp`,
    menu: `${ROOT}menu.webp`,
    pause: `${ROOT}pause.webp`,
    gameplay: `${ROOT}gameplay-60s.mp4`
  };

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

  const caseStudyHtml = `
    <div class="cs-case-study">
      <section class="cs-section" aria-labelledby="cs-scope-title">
        <header class="cs-section-head">
          <p class="cs-index">01</p>
          <div>
            <p class="technical-label">Project scope / Accountability</p>
            <h3 id="cs-scope-title">A solo vertical slice built while learning Unreal.</h3>
          </div>
          <p>CyberShadows was my second-year Games Portfolio project: an anime-inspired third-person hack-and-slash set in a futuristic Japan. I designed the concept and visual direction, created the key character art and supporting assets, assembled the level and UI, and brought the project to a mostly playable vertical slice.</p>
        </header>

        <div class="cs-scope-grid">
          <article class="cs-scope-card cs-owned">
            <p class="technical-label">Original work / Mine</p>
            <h4>Art, design and presentation</h4>
            <ul>
              <li>Game concept, visual direction and level progression.</li>
              <li>Keiko player character design, modelling, UVs and texturing.</li>
              <li>Melee Rob enemy design, modelling and texturing.</li>
              <li>Supporting props including the katana, torii gate and additional project assets.</li>
              <li>Level layout and lighting using a third-party modular environment kit.</li>
              <li>Main menu, pause menu and in-game UI design.</li>
            </ul>
          </article>
          <article class="cs-scope-card cs-assisted">
            <p class="technical-label">Tutorial-led / Integrated by me</p>
            <h4>Gameplay and rendering foundations</h4>
            <ul>
              <li>Player movement, stamina, dash, melee/ranged combat, target lock and damage systems.</li>
              <li>Enemy AI, behaviour trees and supporting gameplay logic.</li>
              <li>Cel-shading and inverted-hull outline materials.</li>
              <li>Systems were followed from tutorials and university material, then adapted and connected inside this project; I did not independently architect the underlying code.</li>
            </ul>
          </article>
        </div>
        <p class="cs-caption">The implementation boundary is intentional: this page shows what I created, what I learned to integrate, and where external learning resources formed the technical foundation.</p>
      </section>

      <section class="cs-section" aria-labelledby="cs-character-title">
        <header class="cs-section-head">
          <p class="cs-index">02</p>
          <div>
            <p class="technical-label">Character art / Engine setup</p>
            <h3 id="cs-character-title">Keiko and Melee Rob.</h3>
          </div>
          <p>The character work was the strongest original production area in the project. Both characters were created specifically for CyberShadows, then prepared for animation and Unreal implementation with assisted rigging workflows.</p>
        </header>

        <div class="cs-character-feature">
          ${zoomImage(media.baseCharacter, "Keiko base character appearance in Unreal Engine before the stylised shader treatment", "cs-character-main")}
          <article class="cs-character-copy">
            <p class="technical-label">Keiko / Player character</p>
            <h4>Designed and built for the game.</h4>
            <p>I designed, modelled, UV-mapped and textured Keiko. AccuRig provided the base humanoid rig; I then brought the character into Unreal, configured the player-side setup and integrated the animation workflow.</p>
            <div class="cs-tags"><span>Blender</span><span>Substance Painter</span><span>AccuRig</span><span>Unreal Engine</span></div>
          </article>
        </div>

        <div class="cs-character-process">
          <figure>
            ${zoomImage(media.keikoRig, "Keiko skeletal and physics setup in Unreal Engine")}
            <figcaption><strong>Keiko</strong> — AccuRig-assisted skeleton and Unreal physics setup.</figcaption>
          </figure>
          <figure>
            ${zoomImage(media.meleeRobRig, "Melee Rob skeletal mesh and rig view in Unreal Engine")}
            <figcaption><strong>Melee Rob</strong> — original model using a Mixamo rig/animation workflow before Unreal integration.</figcaption>
          </figure>
        </div>
      </section>

      <section class="cs-section" aria-labelledby="cs-render-title">
        <header class="cs-section-head">
          <p class="cs-index">03</p>
          <div>
            <p class="technical-label">Technical art / Stylised rendering</p>
            <h3 id="cs-render-title">Pushing the characters toward an anime look.</h3>
          </div>
          <p>I wanted the characters to read more like 2D animation inside a 3D world. Following Unreal material tutorials, I implemented stepped cel shading and an inverted-hull outline, then integrated the setup on the project characters.</p>
        </header>

        <div class="cs-shader-result">
          ${zoomImage(media.baseCharacter, "Keiko before the stylised shader treatment")}
          ${zoomImage(media.shaderImplementation, "Keiko with the final cel-shading material and inverted-hull outline configured in Unreal Engine")}
        </div>
        <div class="cs-before-after-labels" aria-hidden="true"><span>Base appearance</span><span>Final shader treatment</span></div>

        <div class="cs-shader-graphs">
          <figure>
            ${zoomImage(media.celShader, "Tutorial-led Unreal Engine cel-shading material graph")}
            <figcaption>Cel shading — light/normal thresholding used to create stepped shadow bands.</figcaption>
          </figure>
          <figure>
            ${zoomImage(media.outlineShader, "Tutorial-led Unreal Engine inverted-hull outline material graph")}
            <figcaption>Outline — an expanded inverted hull produces the graphic silhouette around the character.</figcaption>
          </figure>
        </div>
        <p class="cs-caption">These material techniques were tutorial-led rather than independently developed; the useful learning outcome was understanding their construction well enough to integrate and tune them for my own characters.</p>
      </section>

      <section class="cs-section" aria-labelledby="cs-world-title">
        <header class="cs-section-head">
          <p class="cs-index">04</p>
          <div>
            <p class="technical-label">Level design / UI</p>
            <h3 id="cs-world-title">Building the playable route around the visual direction.</h3>
          </div>
          <p>The environment geometry came from a third-party modular kit rather than being authored by me. I used it to design the route, combat spaces and lighting, with the cyberpunk/anime contrast carried by colour, character presentation and UI.</p>
        </header>

        <div class="cs-world-grid">
          ${zoomImage(media.hero, "CyberShadows finished alley presentation with Keiko")}
          ${zoomImage(media.levelTorii, "CyberShadows level route and torii transition area")}
        </div>

        <div class="cs-ui-grid">
          <article class="cs-ui-copy">
            <p class="technical-label">Interface</p>
            <h4>Menus and HUD designed for the slice.</h4>
            <p>I designed the main menu, pause menu and in-game HUD, then implemented them around the tutorial-led gameplay systems. Music and sound effects were sourced from Pixabay.</p>
          </article>
          ${zoomImage(media.menu, "CyberShadows main menu")}
          ${zoomImage(media.pause, "CyberShadows pause menu")}
        </div>
      </section>

      <section class="cs-section" aria-labelledby="cs-gameplay-title">
        <header class="cs-section-head">
          <p class="cs-index">05</p>
          <div>
            <p class="technical-label">Gameplay / Tutorial-led implementation</p>
            <h3 id="cs-gameplay-title">Learning to connect systems into one game.</h3>
          </div>
          <p>The player and enemy frameworks were assembled from several tutorial sources and university material. I adapted the implementations to my characters and project requirements, debugged integration problems and got the separate pieces operating together, but made no major architectural changes to the tutorial code.</p>
        </header>

        <div class="cs-combat-pair">
          <figure>${zoomImage(media.melee, "CyberShadows melee combat in the playable slice")}<figcaption>Melee combat</figcaption></figure>
          <figure>${zoomImage(media.ranged, "CyberShadows ranged combat in the playable slice")}<figcaption>Ranged combat</figcaption></figure>
        </div>

        <div class="cs-ai-block">
          ${zoomImage(media.enemyTree, "CyberShadows enemy behaviour tree implemented from the tutorial-led AI system")}
          <article>
            <p class="technical-label">Practical Unreal exposure</p>
            <h4>Systems I worked with</h4>
            <div class="cs-tags cs-tags-large"><span>Enhanced Input</span><span>Animation Blueprints</span><span>Montages</span><span>Actor Components</span><span>Interfaces</span><span>Structs / Enums</span><span>Behaviour Trees</span><span>Blackboards</span><span>EQS</span></div>
            <p>The enemy system came mainly from one tutorial series; the player side combined multiple sources for movement, stamina, dash, melee, ranged combat and target locking.</p>
          </article>
        </div>
      </section>

      <section class="cs-section" aria-labelledby="cs-outcome-title">
        <header class="cs-section-head">
          <p class="cs-index">06</p>
          <div>
            <p class="technical-label">Outcome / Reflection</p>
            <h3 id="cs-outcome-title">A functioning slice, not a finished game.</h3>
          </div>
          <p>The project reached roughly three quarters of the intended vertical slice. It can be played through with working win and lose states, while the final part of the route remained at greybox stage when development stopped.</p>
        </header>

        <div class="cs-outcome-strip">
          <div><span>Engine</span><strong>UE 5.4</strong></div>
          <div><span>Format</span><strong>Solo project</strong></div>
          <div><span>State</span><strong>Playable</strong></div>
          <div><span>Completion</span><strong>≈75%</strong></div>
        </div>

        <div class="cs-takeaway">
          <p class="technical-label">What I took forward</p>
          <blockquote>This project taught me the gap between making an asset and making that asset function as part of a game.</blockquote>
          <p>The most useful experience was the character-to-engine workflow: modelling, assisted rigging, animation setup, materials, gameplay integration and debugging. It also made the split in my interests clearer — I enjoyed the visual/technical boundary far more than gameplay programming itself.</p>
        </div>

        <div class="cs-full-gameplay">
          <p class="technical-label">Gameplay / 60 second cut</p>
          <video controls playsinline preload="metadata" poster="${media.hero}">
            <source src="${media.gameplay}" type="video/mp4" />
          </video>
        </div>

        <details class="cs-references">
          <summary>Implementation references / tutorial sources</summary>
          <p>The gameplay and shader work was tutorial-led. The project report lists the following learning resources, alongside university-provided material:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=wAsu7IEHz-w" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=-t3PbGRazKg&list=PLNwKK6OwH7eW1n49TW6-FmiZhqRn97cRy&index=1" target="_blank" rel="noreferrer">Enemy AI series, parts 1–8 ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=newhrqTYAfs&t=40s" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=iPfU1SmzkkY&t=108s" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=hkQ9bEwpfV8&t=2312s" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=o3uFXnNxwKE&t=11s" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
            <li><a href="https://www.youtube.com/watch?v=H6rqJbwjRIk&t=1819s" target="_blank" rel="noreferrer">YouTube tutorial ↗</a></li>
          </ul>
        </details>

        <div class="cs-credits">
          <span class="technical-label">Production notes</span>
          <p>Original game concept, Keiko and Melee Rob character art, supporting props, level layout and UI by Andrei-Constantin Purcăreață. Level geometry assembled from a third-party modular environment kit. Gameplay and character-shader implementation followed online tutorials and university learning material. Keiko used an AccuRig-assisted rig; Melee Rob used Mixamo for rig/animation setup. SFX and music sourced from Pixabay.</p>
        </div>
      </section>
    </div>`;

  const normalizeTitle = (value) => (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  function cyberCard() {
    return [...document.querySelectorAll("[data-project]")].find((card) =>
      normalizeTitle(card.querySelector(".card-copy strong")?.textContent) === "cybershadows"
    );
  }

  function enhanceCard() {
    const card = cyberCard();
    if (!card) return;
    const cardMedia = card.querySelector(".card-media");
    if (cardMedia) cardMedia.innerHTML = `<img class="cs-card-image" src="${media.hero}" alt="" aria-hidden="true" />`;
    const label = card.querySelector(".technical-label");
    if (label) label.textContent = "Unreal Engine / Character + Game Art";
    const role = card.querySelector(".card-role");
    if (role) role.textContent = "Character Art · Level Design · UE Integration";
  }

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
    const host = document.querySelector(".dialog-placeholder, .cs-case-study-host");
    if (!title || !hero || !host) return;

    const isCyber = normalizeTitle(title.textContent) === "cybershadows";
    if (isCyber) {
      hero.innerHTML = zoomImage(media.hero, "CyberShadows — Keiko in the finished cyberpunk alley");
      label.textContent = "Solo university vertical slice / Unreal Engine 5.4";
      summary.textContent = "Anime-inspired third-person hack-and-slash combining original character art, level and UI design with tutorial-led Unreal gameplay implementation.";
      meta.innerHTML = `
        <div><dt>Role</dt><dd>Character Art · Game/Level Design · UE Integration</dd></div>
        <div><dt>Tools</dt><dd>Unreal Engine 5.4 · Blender · Substance Painter · AccuRig · Mixamo</dd></div>
        <div><dt>Outcome</dt><dd>Playable vertical slice · ≈75% complete</dd></div>`;
      host.className = "cs-case-study-host";
      if (!host.querySelector(".cs-case-study")) host.innerHTML = caseStudyHtml;
    } else if (host.classList.contains("cs-case-study-host")) {
      restoreDefaultPlaceholder(host);
    }
  }

  enhanceCard();
  syncDialog();

  const title = document.querySelector("#dialog-title");
  if (title) new MutationObserver(syncDialog).observe(title, { childList: true, subtree: true });

  const dialog = document.querySelector("#project-dialog");
  if (dialog) {
    new MutationObserver(() => {
      if (!dialog.open) {
        const host = dialog.querySelector(".cs-case-study-host");
        if (host) restoreDefaultPlaceholder(host);
        dialog.querySelectorAll("video").forEach((video) => video.pause());
      } else {
        syncDialog();
      }
    }).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  }
})();
