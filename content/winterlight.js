(function () {
  const ROOT = "./assets/images/winterlight/";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const media = {
    heroVideo: `${ROOT}hero-transition.mp4`,
    heroPoster: `${ROOT}hero-poster.webp`,
    modernAction: `${ROOT}ingame-modern-action.webp`,
    transition: `${ROOT}ingame-transition.webp`,
    modernArena: `${ROOT}ingame-modern-arena.webp`,
    retroArena: `${ROOT}ingame-retro-arena.webp`,
    retroPoster: `${ROOT}ingame-retro-poster.webp`,
    gunModern: `${ROOT}gun-modern.webp`,
    gunRetro: `${ROOT}gun-retro.webp`,
    gunWireModern: `${ROOT}gun-wire-modern.webp`,
    gunWireRetro: `${ROOT}gun-wire-retro.webp`,
    enemyVideo: `${ROOT}enemy-sync.mp4`,
    enemyPoster: `${ROOT}enemy-poster.webp`,
    ammoModern: `${ROOT}ammo-modern.mp4`,
    ammoModernPoster: `${ROOT}ammo-modern-poster.webp`,
    ammoRetro: `${ROOT}ammo-retro.mp4`,
    ammoRetroPoster: `${ROOT}ammo-retro-poster.webp`,
    gameplay: `${ROOT}gameplay-60s.mp4`,
    gameplayPoster: `${ROOT}gameplay-poster.webp`,
    inspectorManager: `${ROOT}inspector-style-manager.webp`,
    inspectorHud: `${ROOT}inspector-hud.webp`,
    inspectorEnemy: `${ROOT}inspector-enemy.webp`,
    inspectorAmmo: `${ROOT}inspector-ammo.webp`,
    inspectorTransition: `${ROOT}inspector-transition.webp`
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

  const loopVideo = (src, poster, label, className = "") => `
    <div class="wl-video-frame ${className}">
      <p class="technical-label">${label}</p>
      <video data-wl-loop autoplay muted loop playsinline webkit-playsinline preload="auto" poster="${poster}">
        <source src="${src}" type="video/mp4" />
      </video>
    </div>`;

  const caseStudyHtml = `
    <div class="wl-case-study">

      <section class="wl-section" aria-labelledby="wl-architecture-title">
        <header class="wl-section-head">
          <p class="wl-index">01</p>
          <div>
            <p class="technical-label">Technical art / System overview</p>
            <h3 id="wl-architecture-title">One gameplay state. Two presentation systems.</h3>
          </div>
          <p>I approached the problem from the art side first: the modern and retro versions needed to feel like two complete visual states without becoming two different games. A central style state coordinates the presentation layers, while the underlying gameplay stays consistent.</p>
        </header>

        <div class="wl-architecture" role="img" aria-label="Simplified Winterlight style swap architecture">
          <div class="wl-arch-chain">
            <div class="wl-node">
              <div class="wl-node-title"><span>Trigger</span><i class="wl-socket"></i></div>
              <div class="wl-node-body"><span>Scripted event</span><span>Debug input</span></div>
            </div>
            <div class="wl-arch-arrow">→</div>
            <div class="wl-node">
              <div class="wl-node-title"><span>StyleSwapManager</span><i class="wl-socket"></i></div>
              <div class="wl-node-body"><span class="wl-node-row"><span>State</span><b>Modern / Retro</b></span><span>Blocks overlapping swaps</span></div>
            </div>
            <div class="wl-arch-arrow">→</div>
            <div class="wl-node violet">
              <div class="wl-node-title"><span>Transition FX</span><i class="wl-socket violet"></i></div>
              <div class="wl-node-body"><span>Pause registered gameplay</span><span>CRT roll → tear → settle</span><span><b>Midpoint:</b> commit state</span></div>
            </div>
            <div class="wl-arch-arrow">→</div>
            <div class="wl-node violet">
              <div class="wl-node-title"><span>GlobalStyleSwapEvent</span><i class="wl-socket violet"></i></div>
              <div class="wl-node-body"><span>ScriptableObject event channel</span><span>Broadcast new presentation state</span></div>
            </div>
          </div>

          <div class="wl-arch-listeners">
            <div class="wl-listener"><strong>Environment</strong><span>Material sets switch while the level geometry remains unchanged.</span></div>
            <div class="wl-listener"><strong>Enemy visuals</strong><span>3D and billboard representations remain alive; renderers and damage VFX switch.</span></div>
            <div class="wl-listener"><strong>Player weapon</strong><span>Modern and retro weapon representations respond to the same global state.</span></div>
            <div class="wl-listener"><strong>HUD</strong><span>Panel art, fonts, face states and crosshair update together.</span></div>
            <div class="wl-listener"><strong>Audio</strong><span>Mixer snapshots move between clean and deliberately degraded presentation.</span></div>
          </div>
        </div>
        <p class="wl-caption">Simplified from the implemented Unity components. The transition effect commits the actual style change at its midpoint, rather than letting each subsystem change independently.</p>
        <div class="wl-role-note">
          <p class="technical-label">My role / Technical art</p>
          <p>I approached Winterlight from a 3D art and technical-art perspective: defining how the visual states should behave, authoring the key 3D assets and presentation, and then building the Unity setup needed to make those elements work together in real time. I configured, integrated, tested and debugged the system in-engine, while the C# implementation used AI assistance based on my requirements and system design.</p>
        </div>

        <div class="wl-inspector-grid">
          ${zoomImage(media.inspectorManager, "Unity StyleSwapManager inspector")}
          ${zoomImage(media.inspectorHud, "Unity HUD style swap listener inspector")}
          ${zoomImage(media.inspectorTransition, "Unity transition FX inspector")}
        </div>
      </section>


      <section class="wl-section" aria-labelledby="wl-owned-title">
        <header class="wl-section-head">
          <p class="wl-index">02</p>
          <div>
            <p class="technical-label">3D art / Authorship</p>
            <h3 id="wl-owned-title">Built as an artist. Systematised as technical art.</h3>
          </div>
          <p>My starting point on Winterlight was 3D art. The weapon, enemy, retro presentation and visual direction are the foundation of the project; the technical work grew out of needing those authored assets to behave as one controlled real-time system.</p>
        </header>

        <div class="wl-ownership-grid">
          <article class="wl-ownership-card">
            <p class="technical-label">Authored / Directed by me</p>
            <h4>Core project ownership</h4>
            <ul>
              <li>Khronovik player weapon: modelling, UVs, baking, texturing and Unity implementation.</li>
              <li>Enemy visual design, 3D asset and retro billboard representation.</li>
              <li>Level layout, HUD presentation, visual direction and transition timing.</li>
              <li>Technical-art system design: defining how each visual state should behave and how the presentation layers should respond together.</li>
              <li>Unity integration, combat configuration, testing and technical debugging.</li>
              <li>Research design, playtesting, IEQ processing and evaluation.</li>
            </ul>
          </article>

          <article class="wl-ownership-card wl-disclosure">
            <p class="technical-label">External / Assisted resources</p>
            <h4>Transparent production notes</h4>
            <ul>
              <li>Environment surface materials came from a licensed paid PBR material library; I built and dressed the playable space around the research requirements.</li>
              <li>The CRT post-process was a commercial shader asset that I integrated and tuned as part of the retro presentation.</li>
              <li>All sound effects were sourced from Pixabay.</li>
              <li>Original music was produced by a professional music producer under my direction.</li>
              <li>C# implementation used AI-assisted coding based on my system design and requirements. My role was to define the behaviour, author the visual content, configure and integrate the systems in Unity, then test, debug and iterate them.</li>
            </ul>
          </article>
        </div>

        <div class="wl-gun-showcase" aria-label="Khronovik weapon asset showcase">
          ${zoomImage(media.gunModern, "Khronovik final PBR weapon asset", "wl-gun-main")}
          <div class="wl-wire-pair">
            <figure>
              ${zoomImage(media.gunWireModern, "Khronovik modern weapon topology view")}
              <figcaption><span>Modern</span> topology / authored mesh</figcaption>
            </figure>
            <figure>
              ${zoomImage(media.gunWireRetro, "Khronovik retro weapon topology view")}
              <figcaption><span>Retro</span> presentation topology</figcaption>
            </figure>
          </div>
        </div>
        <p class="wl-caption">Khronovik was built as the single player-facing weapon platform. The same authored form supports both visual states, while the combat system changes ammunition behaviour and style-specific feedback without replacing the underlying weapon concept.</p>
      </section>

      <section class="wl-section" aria-labelledby="wl-context-title">
        <header class="wl-section-head">
          <p class="wl-index">03</p>
          <div>
            <p class="technical-label">Research context / Constraint</p>
            <h3 id="wl-context-title">The research gave the system a constraint.</h3>
          </div>
          <p>Winterlight was built for my final-year dissertation. The research question gave the technical-art work a clear constraint: modern, retro and transition conditions had to remain mechanically comparable, so the visual transformation could be tested without changing the game underneath it.</p>
        </header>

        <p class="wl-lead">I built three controlled conditions — Modern, Retro and Transition — around the same level, combat rules and enemy behaviour. The experiment used the Immersive Experience Questionnaire (IEQ). For the portfolio, the research matters mainly because it forced the presentation system to be controlled, repeatable and consistent.</p>

        <div class="wl-research-strip" aria-label="Winterlight research summary">
          <div class="wl-stat"><span>Participants</span><strong>12</strong><small>4 per condition</small></div>
          <div class="wl-stat"><span>Modern IEQ</span><strong>4.90</strong><small>Mean immersion</small></div>
          <div class="wl-stat"><span>Transition IEQ</span><strong>5.62</strong><small>Mean immersion</small></div>
          <div class="wl-stat"><span>Retro IEQ</span><strong>6.06</strong><small>Mean immersion</small></div>
        </div>

        <div class="wl-gallery">
          ${zoomImage(media.modernAction, "Winterlight modern presentation during combat", "wl-gallery-main")}
          ${zoomImage(media.retroPoster, "Winterlight retro presentation with CRT degradation", "wl-gallery-side")}
          ${zoomImage(media.transition, "Runtime transition between modern and retro presentation", "wl-gallery-wide")}
        </div>
      </section>


      <section class="wl-section" aria-labelledby="wl-problems-title">
        <header class="wl-section-head">
          <p class="wl-index">04</p>
          <div>
            <p class="technical-label">Problems / Solutions</p>
            <h3 id="wl-problems-title">Keeping two enemies mechanically equivalent.</h3>
          </div>
          <p>The modern enemy used skeletal 3D animation while the retro version used billboard sprites. Letting either animation directly own combat timing risked making the two visual conditions play differently.</p>
        </header>

        <div class="wl-problem-grid">
          ${loopVideo(media.enemyVideo, media.enemyPoster, "Retro billboard / Modern 3D")}
          <div class="wl-problem-copy">
            <article class="wl-ps-card problem">
              <p class="technical-label">Problem</p>
              <h4>Different animation representations</h4>
              <p>The 3D and sprite controllers did not naturally share identical animation timing. A visual swap could therefore create different attack timing or state feedback.</p>
            </article>
            <article class="wl-ps-card solution">
              <p class="technical-label">Solution</p>
              <h4>Gameplay drives presentation</h4>
              <p>EnemyRangedBrain and RangedAttackModule own navigation and attack state. EnemyVisualAnimatorProxy sends the same parameters to both animators, while EnemyStyleSwapListener controls which renderer and damage VFX are presented.</p>
            </article>
          </div>
        </div>

        <div class="wl-enemy-flow" role="img" aria-label="Enemy gameplay and presentation separation diagram">
          <div class="wl-node">
            <div class="wl-node-title"><span>EnemyRangedBrain</span><i class="wl-socket"></i></div>
            <div class="wl-node-body"><span>Navigation / chase state</span><span>Attack eligibility</span><span>SetWalking(bool)</span></div>
          </div>
          <div class="wl-arch-arrow">→</div>
          <div class="wl-node violet">
            <div class="wl-node-title"><span>EnemyVisualAnimatorProxy</span><i class="wl-socket violet"></i></div>
            <div class="wl-node-body"><span>Drive shared parameters</span><span>Keep both animators ticking</span></div>
          </div>
          <div class="wl-arch-arrow">→</div>
          <div class="wl-node">
            <div class="wl-node-title"><span>Presentation</span><i class="wl-socket"></i></div>
            <div class="wl-node-body"><span>Modern skeletal renderer</span><span>Retro billboard renderer</span><span>Style listener selects visible state</span></div>
          </div>
        </div>

        <div class="wl-secondary-problems">
          <article class="wl-ps-card">
            <p class="technical-label">System-wide transition</p>
            <h4>Commit at one controlled midpoint</h4>
            <p>Transition FX briefly pauses registered gameplay systems, plays the CRT/glitch sequence, commits the global state once at the midpoint, then resumes play. That prevents the environment, HUD, enemy and audio layers from visibly changing at different times.</p>
          </article>
          <article class="wl-ps-card">
            <p class="technical-label">Style-specific shooting</p>
            <h4>Resolve the active module after listeners update</h4>
            <p>After a style event, PlayerCombatController waits one frame before caching the style-appropriate shoot module. This avoids using a stale module while weapon objects are still applying their new active state.</p>
          </article>
        </div>
      </section>


      <section class="wl-section" aria-labelledby="wl-ammo-title">
        <header class="wl-section-head">
          <p class="wl-index">05</p>
          <div>
            <p class="technical-label">Combat / Data-driven configuration</p>
            <h3 id="wl-ammo-title">Four ammo behaviours, one weapon platform.</h3>
          </div>
          <p>Bullet, shell, rocket and plasma configurations share the same player combat flow. Their tuning and audiovisual feedback live in authorable ScriptableObject data rather than four separate weapon implementations.</p>
        </header>

        <div class="wl-ammo-grid">
          ${loopVideo(media.ammoModern, media.ammoModernPoster, "Modern presentation")}
          ${loopVideo(media.ammoRetro, media.ammoRetroPoster, "Retro presentation")}
        </div>

        <div class="wl-ammo-detail">
          ${zoomImage(media.inspectorAmmo, "AmmoTypeConfig ScriptableObject inspector")}
          <article class="wl-ammo-copy">
            <p class="technical-label">AmmoTypeConfig</p>
            <h4>Behaviour and feedback in one authoring asset.</h4>
            <p>Each configuration stores combat tuning and presentation data. PlayerCombatController consumes the same configuration regardless of visual state, while the modern and retro shooting modules use style-appropriate muzzle presentation.</p>
            <div class="wl-config-list" aria-label="Ammo configuration properties">
              <span>Damage</span><span>Fire cooldown</span><span>Modern VFX</span><span>Retro sprite VFX</span><span>SFX</span><span>Pitch</span><span>Recoil</span><span>Cooldown smoke</span>
            </div>
          </article>
        </div>
      </section>


      <section class="wl-section" aria-labelledby="wl-results-title">
        <header class="wl-section-head">
          <p class="wl-index">06</p>
          <div>
            <p class="technical-label">Outcome / Reflection</p>
            <h3 id="wl-results-title">The transition held together.</h3>
          </div>
          <p>The research result matters, but the project’s lasting value for me was learning to treat presentation as a controllable system rather than a stack of disconnected effects.</p>
        </header>

        <div class="wl-result-strip">
          <div class="wl-stat"><span>Project mark</span><strong>74</strong><small>First-class dissertation mark</small></div>
          <div class="wl-stat"><span>ANOVA</span><strong>p = .017</strong><small>Overall condition effect</small></div>
          <div class="wl-stat"><span>Transition mean</span><strong>5.62</strong><small>Closer to Retro than Modern</small></div>
          <div class="wl-stat"><span>Recognition</span><strong>DSE</strong><small>Digital Shark Expo nominee</small></div>
        </div>
        <p class="wl-result-note">The sample was small (n=12) and no post-hoc pairwise tests were conducted, so I treat the statistical result as indicative rather than definitive. Within that limitation, the transition condition did not show the immersion drop I was specifically testing for.</p>

        <div class="wl-takeaway">
          <p class="technical-label">Personal reflection</p>
          <blockquote>Winterlight was the first project where I properly shifted my mindset from visual artist to technical artist.</blockquote>
          <p>What first attracted me to the brief was the contrast between modern and retro graphics. The real-time constraint, combined with the academic research side of the project, forced me to think differently: not just about making art, but about how to build systems around it and how to turn visual ideas into something the engine could control consistently.</p>
          <p>By the end of the project I felt I had moved from thinking mainly as a visual artist to thinking much more like a systems designer. I also discovered how satisfying it is to systematise an abstract idea — taking something I had never built before, understanding how the engine needed to work, breaking the problem apart and eventually seeing that idea materialise in real time. That is the part of the project that pushed me most strongly towards Technical Art.</p>
        </div>

        <div class="wl-full-gameplay">
          <p class="technical-label">Trailer</p>
          <video controls playsinline preload="metadata" poster="${media.gameplayPoster}">
            <source src="${media.gameplay}" type="video/mp4" />
          </video>
          <a class="wl-build-download" href="https://github.com/andcns/andcns.github.io/releases/latest/download/Project_Winterlight_Win.rar" download>
            <span>
              <strong>Download build here</strong>
              <small>Windows playable build</small>
            </span>
            <span class="wl-build-download-icon" aria-hidden="true">↓</span>
          </a>
        </div>

        <div class="wl-credits">
          <span class="technical-label">Credits</span>
          <div class="wl-credit-list">
            <p><strong>Music</strong> — Vlad Popescu, produced under my direction.</p>
            <p><strong>CRT post-process</strong> — <a href="https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/crt-postprocess-for-urp-hdrp-and-built-in-pipelines-310692" target="_blank" rel="noopener noreferrer">CRT Postprocess for URP, HDRP and Built-in Pipelines ↗</a></p>
            <p><strong>Environment materials</strong> — <a href="https://freepbr.com/" target="_blank" rel="noopener noreferrer">FreePBR.com ↗</a></p>
            <p><strong>SFX</strong> — Pixabay.</p>
          </div>
        </div>
      </section>
    </div>`;

  function heroVideoMarkup() {
    return `<video class="wl-dialog-video" autoplay muted loop playsinline webkit-playsinline preload="auto" poster="${media.heroPoster}">
      <source src="${media.heroVideo}" type="video/mp4" />
    </video>`;
  }

  function enhanceCard() {
    const card = document.querySelector('[data-project="project-winterlight"]');
    if (!card) return;
    const cardMedia = card.querySelector(".card-media");
    if (!cardMedia) return;
    cardMedia.innerHTML = `<video class="wl-card-video" autoplay muted loop playsinline webkit-playsinline preload="auto" poster="${media.heroPoster}" aria-hidden="true">
      <source src="${media.heroVideo}" type="video/mp4" />
    </video>`;
    prepareAutoplayVideo(cardMedia.querySelector(".wl-card-video"));
  }

  let loopObserver;

  function prepareAutoplayVideo(video) {
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.preload = "auto";

    const tryPlay = () => {
      const result = video.play();
      if (result && typeof result.catch === "function") result.catch(() => {});
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("canplay", tryPlay, { once: true });
      video.load();
    }
  }

  function retryVisibleVideos() {
    document.querySelectorAll(".wl-card-video, .wl-dialog-video, video[data-wl-loop]").forEach((video) => {
      const rect = video.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.right > 0 && rect.top < window.innerHeight && rect.left < window.innerWidth;
      if (visible) prepareAutoplayVideo(video);
    });
  }

  function setupLoopVideos(scope) {
    if (loopObserver) loopObserver.disconnect();
    const videos = [...scope.querySelectorAll("video[data-wl-loop]")];
    videos.forEach(prepareAutoplayVideo);
    if (!videos.length) return;

    loopObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.12) {
          prepareAutoplayVideo(entry.target);
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: [0, 0.12, 0.4] });

    videos.forEach((video) => loopObserver.observe(video));
  }

  ["pointerdown", "touchstart", "click"].forEach((eventName) => {
    document.addEventListener(eventName, retryVisibleVideos, { passive: true, capture: true });
  });

  window.addEventListener("pageshow", retryVisibleVideos);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) retryVisibleVideos();
  });

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
    const host = document.querySelector(".dialog-placeholder, .dialog-case-study-host");
    if (!title || !hero || !host) return;

    const isWinterlight = title.textContent.trim() === "Project Winterlight";
    if (isWinterlight) {
      const dialogSummary = document.querySelector("#dialog-summary");
      if (dialogSummary) {
        dialogSummary.textContent = "A 3D art-led Unity dissertation project built around a runtime system that transforms the same FPS between modern and retro presentation states. I authored the key player-facing assets and designed how the art, HUD, enemy presentation, VFX and audio should respond as one controlled system.";
      }

      if (!hero.querySelector(".wl-dialog-video")) hero.innerHTML = heroVideoMarkup();
      prepareAutoplayVideo(hero.querySelector(".wl-dialog-video"));
      host.className = "dialog-case-study-host";
      if (!host.querySelector(".wl-case-study")) {
        host.innerHTML = caseStudyHtml;
        setupLoopVideos(host);
      }
    } else if (host.classList.contains("dialog-case-study-host")) {
      if (loopObserver) loopObserver.disconnect();
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
        dialog.querySelectorAll("video").forEach((video) => video.pause());
      } else {
        syncDialog();
      }
    }).observe(dialog, { attributes: true, attributeFilter: ["open"] });
  }
})();
