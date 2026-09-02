(function () {
  const content = window.PORTFOLIO_CONTENT;
  const selectedGrid = document.querySelector("#selected-grid");
  const otherGrid = document.querySelector("#other-grid");
  const dialog = document.querySelector("#project-dialog");
  const closeButton = document.querySelector(".dialog-close");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  function projectMedia(project, className) {
    if (project.image) {
      return `<img src="${project.image}" alt="${project.title} project preview" loading="lazy" />`;
    }

    return `
      <span class="pending-media ${className || ""}" aria-label="${project.imagePending}">
        <span class="pending-orbit"></span>
        <span class="technical-label">${project.imagePending}</span>
      </span>`;
  }

  function selectedCard(project, index) {
    const featuredClass = project.featured ? " selected-card-featured" : "";
    const cardNumber = String(index + 1).padStart(2, "0");

    return `
      <button class="selected-card${featuredClass}" type="button" data-project="${project.slug}" aria-label="Open ${project.title} case study">
        <span class="card-media">${projectMedia(project)}</span>
        <span class="card-shade"></span>
        <span class="card-number">${cardNumber}</span>
        <span class="card-copy">
          <span class="technical-label">${project.label}</span>
          <strong>${project.title}</strong>
          <span class="card-role">${project.role}</span>
        </span>
        <span class="card-open" aria-hidden="true">View case study ↗</span>
      </button>`;
  }

  function otherCard(project) {
    return `
      <article class="other-card">
        <div class="other-media">${projectMedia(project)}</div>
        <div class="other-copy">
          <p class="technical-label">${project.label}</p>
          <h3>${project.title}</h3>
          <p>${project.contribution}</p>
        </div>
      </article>`;
  }

  function openProject(slug, updateHistory = true) {
    const project = content.selectedWork.find((item) => item.slug === slug);
    if (!project) return;

    document.querySelector("#dialog-hero").innerHTML = projectMedia(project, "dialog-pending");
    document.querySelector("#dialog-label").textContent = project.label;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-summary").textContent = project.summary;
    document.querySelector("#dialog-meta").innerHTML = `
      <div><dt>Role</dt><dd>${project.role}</dd></div>
      <div><dt>Tools</dt><dd>${project.tools}</dd></div>
      <div><dt>Outcome</dt><dd>${project.outcome}</dd></div>`;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    if (updateHistory) {
      const url = new URL(window.location.href);
      url.searchParams.set("project", slug);
      history.pushState({ project: slug }, "", url);
    }
  }

  function closeProject(updateHistory = true) {
    if (dialog.open) dialog.close();
    document.body.classList.remove("dialog-open");

    if (updateHistory) {
      const url = new URL(window.location.href);
      url.searchParams.delete("project");
      if (history.state && history.state.project) {
        history.back();
      } else {
        history.replaceState({}, "", url);
      }
    }
  }

  selectedGrid.innerHTML = content.selectedWork.map(selectedCard).join("");
  otherGrid.innerHTML = content.otherWork.map(otherCard).join("");

  selectedGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (card) openProject(card.dataset.project);
  });

  closeButton.addEventListener("click", () => closeProject());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject();
  });

  window.addEventListener("popstate", () => {
    const project = new URL(window.location.href).searchParams.get("project");
    project ? openProject(project, false) : closeProject(false);
  });

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("site-nav-open", !open);
  });

  nav.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("site-nav-open");
  });

  const requestedProject = new URL(window.location.href).searchParams.get("project");
  if (requestedProject) openProject(requestedProject, false);
})();
