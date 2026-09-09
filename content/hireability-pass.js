(function () {
  const normalizeTitle = (value) => (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  function text(root, selector, value) {
    const node = root.querySelector(selector);
    if (node) node.textContent = value;
  }

  function patchHomepage() {
    const intro = document.querySelector(".intro-copy");
    if (!intro || intro.querySelector(".intro-contact")) return;
    const summary = intro.querySelector(".intro-summary");
    if (!summary) return;

    const links = document.createElement("div");
    links.className = "intro-contact";
    links.innerHTML = `
      <a href="mailto:andreipurcareata@gmail.com">Email <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/andreicns">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href="./assets/files/Andrei-Purcareata-CV.pdf">CV <span aria-hidden="true">↓</span></a>`;
    summary.after(links);
  }

  function patchGladiatorCard() {
    const card = [...document.querySelectorAll("[data-project]")].find((item) =>
      normalizeTitle(item.querySelector(".card-copy strong")?.textContent) === "gladiatorascendant"
    );
    if (!card || card.dataset.hireabilityPass === "true") return;

    card.dataset.hireabilityPass = "true";
    card.classList.add("is-wip");
    card.removeAttribute("data-project");
    card.setAttribute("aria-label", "Gladiator Ascendant — case study in progress");
    card.setAttribute("tabindex", "-1");

    const label = card.querySelector(".technical-label");
    const role = card.querySelector(".card-role");
    const open = card.querySelector(".card-open");
    if (label) label.textContent = "Global Game Jam 2026 · Case study in progress";
    if (role) role.textContent = "Visual Direction · Character Art";
    if (open) open.textContent = "Case study in progress";
  }

  function patchWinterlight(root) {
    if (!root || root.dataset.hireabilityPass === "true") return;
    root.dataset.hireabilityPass = "true";

    text(root, ".wl-role-note p:last-child", "I defined how the two visual states should behave, authored the key 3D assets and presentation, and built the Unity setup that kept those elements working together in real time. My work covered system design, engine configuration, integration, testing and debugging.");

    const takeaway = root.querySelector(".wl-takeaway");
    if (takeaway) {
      text(takeaway, "blockquote", "Winterlight was the project that moved me decisively toward Technical Art.");
      const paragraphs = takeaway.querySelectorAll(":scope > p");
      if (paragraphs[1]) paragraphs[1].textContent = "The modern-to-retro transition started as a visual idea, but making it work consistently forced me to think in systems: define the behaviour, separate gameplay from presentation, expose the right controls, then test the whole thing in-engine. That process is what I enjoyed most.";
      if (paragraphs[2]) paragraphs[2].remove();
    }
  }

  function patchRay(root) {
    if (!root || root.dataset.hireabilityPass === "true") return;
    root.dataset.hireabilityPass = "true";

    const reflection = root.querySelector("#rd-reflection-title")?.closest(".rd-section");
    if (!reflection) return;

    text(reflection, ".technical-label", "Takeaways / Next pass");
    text(reflection, "#rd-reflection-title", "What I took forward, and what I would improve next.");
    text(reflection, ".rd-section-head > p:last-child", "Ray gave me an end-to-end character workflow: sculpting, cloth, retopology, baking, mocap retargeting and engine animation setup. It also gave me a much better sense of where technical tools can support character production.");

    const cards = reflection.querySelectorAll(".rd-reflection-grid article");
    if (cards[0]) {
      text(cards[0], ".technical-label", "Pipeline takeaway");
      text(cards[0], "h4", "A complete character workflow");
      text(cards[0], "p:last-child", "Working through the whole pipeline made the dependencies between modelling, deformation, animation and engine setup much clearer than treating each stage in isolation.");
    }
    if (cards[1]) {
      text(cards[1], ".technical-label", "Next pass");
      text(cards[1], "h4", "Skinning and facial controls");
      text(cards[1], "p:last-child", "If I revisited Ray, I would prioritise cleaner shoulder and hip skinning, tighter animation transitions and a basic facial-control setup.");
    }
  }

  function patchCyber(root) {
    if (!root || root.dataset.hireabilityPass === "true") return;
    root.dataset.hireabilityPass = "true";

    const scopeCaption = root.querySelector("#cs-scope-title")?.closest(".cs-section")?.querySelector(".cs-caption");
    if (scopeCaption) scopeCaption.hidden = true;

    const render = root.querySelector("#cs-render-title")?.closest(".cs-section");
    if (render) {
      text(render, ".cs-section-head > p:last-child", "I wanted the characters to read more like 2D animation inside a 3D world. I implemented stepped cel shading and an inverted-hull outline, then tuned the setup on the project characters in Unreal.");
      const caption = render.querySelector(".cs-caption");
      if (caption) caption.hidden = true;
    }

    const world = root.querySelector("#cs-world-title")?.closest(".cs-section");
    if (world) text(world, ".cs-ui-copy p:last-child", "I designed the main menu, pause menu and in-game HUD, then implemented them around the gameplay systems. Music and sound effects were sourced from Pixabay.");

    const gameplay = root.querySelector("#cs-gameplay-title")?.closest(".cs-section");
    if (gameplay) {
      text(gameplay, ".technical-label", "Gameplay / Unreal integration");
      text(gameplay, "#cs-gameplay-title", "Integrating combat, animation and UI into one playable loop.");
      text(gameplay, ".cs-section-head > p:last-child", "The player and enemy frameworks started from learning resources. My work was adapting them to the project, connecting the character, animation and UI assets, debugging integration issues and getting the separate systems working together as one playable slice.");
      const systemsCopy = gameplay.querySelector(".cs-ai-block article > p:last-child");
      if (systemsCopy) systemsCopy.hidden = true;
    }

    const outcome = root.querySelector("#cs-outcome-title")?.closest(".cs-section");
    if (outcome) {
      const takeaway = outcome.querySelector(".cs-takeaway");
      if (takeaway) {
        text(takeaway, "blockquote", "This project taught me the gap between making an asset and making that asset work inside a game.");
        text(takeaway, "p:last-child", "The most useful part was the character-to-engine workflow: modelling, assisted rigging, animation setup, materials, gameplay integration and debugging. That visual/technical boundary was much more interesting to me than gameplay programming itself.");
      }
    }
  }

  function patchLumberjill(root) {
    if (!root || root.dataset.hireabilityPass === "true") return;
    root.dataset.hireabilityPass = "true";

    const context = root.querySelector("#lj-context-title")?.closest(".lj-section");
    if (context) {
      text(context, "#lj-context-title", "Owning the visual side of a four-person mobile project.");
      text(context, ".lj-section-head > p:last-child", "I joined LumberJill as UI Designer and Character Artist, then took responsibility for much of the player-facing visual language: early UI planning, the reusable interface style, both main characters, and getting that work functioning inside Unity.");
    }

    const team = root.querySelector("#lj-team-title")?.closest(".lj-section");
    if (team) team.hidden = true;

    const reflection = root.querySelector("#lj-reflection-title")?.closest(".lj-section");
    if (reflection) {
      text(reflection, ".technical-label", "Outcome / Takeaways");
      text(reflection, "#lj-reflection-title", "What I took forward.");
      text(reflection, ".lj-section-head > p:last-child", "We came close to the intended vertical slice. The most useful part for me was carrying the UI and character work all the way from rough planning into a live mobile build, then continuing to adapt it as the project changed.");
      const cards = reflection.querySelectorAll(".lj-reflection-grid article");
      if (cards[0]) {
        text(cards[0], ".technical-label", "Visual ownership");
        text(cards[0], "h4", "From rough layouts to a consistent UI language");
        text(cards[0], "p:last-child", "I took the interface from early hierarchy sketches into a reusable visual kit and final Unity screens, while also delivering both player characters.");
      }
      if (cards[1]) {
        text(cards[1], ".technical-label", "Engine integration");
        text(cards[1], "h4", "Judge the work in the game, not the mock-up");
        text(cards[1], "p:last-child", "The project made me much more comfortable iterating on art inside the engine and working around live systems rather than treating implementation as a separate final step.");
      }
    }
  }

  function patchProjects() {
    patchHomepage();
    patchGladiatorCard();
    patchWinterlight(document.querySelector(".wl-case-study"));
    patchRay(document.querySelector(".rd-case-study"));
    patchCyber(document.querySelector(".cs-case-study"));
    patchLumberjill(document.querySelector(".lj-case-study"));
  }

  const style = document.createElement("style");
  style.textContent = `
    .intro-contact{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}
    .intro-contact a{display:inline-flex;align-items:center;gap:8px;padding:8px 11px;border:1px solid var(--line);background:rgba(15,18,25,.58);font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.68rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase}
    .intro-contact a:hover{border-color:var(--copper-bright);color:var(--paper)}
    .intro-contact span{color:var(--violet)}
    .selected-card.is-wip{cursor:default}
    .selected-card.is-wip:hover,.selected-card.is-wip:focus-visible{transform:none;box-shadow:none;border-color:var(--line)}
    .selected-card.is-wip:hover .card-media img,.selected-card.is-wip:focus-visible .card-media img{transform:none;filter:none}
    .selected-card.is-wip:hover .card-copy,.selected-card.is-wip:focus-visible .card-copy{transform:none}
    .selected-card.is-wip .card-open{opacity:1;transform:none;color:var(--paper-soft)}
  `;
  document.head.appendChild(style);

  patchProjects();
  new MutationObserver(patchProjects).observe(document.body, { childList: true, subtree: true });
})();
