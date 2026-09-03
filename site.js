(function () {
  const content = window.PORTFOLIO_CONTENT;
  const selectedGrid = document.querySelector("#selected-grid");
  const otherGrid = document.querySelector("#other-grid");
  const dialog = document.querySelector("#project-dialog");
  const closeButton = document.querySelector(".dialog-close");
  const dialogScroll = document.querySelector(".dialog-scroll");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const assetPrefix = document.body.dataset.assetPrefix || ".";
  let closeTimer;

  function resolveImagePath(path) {
    return path.startsWith("./") ? `${assetPrefix}${path.slice(1)}` : path;
  }

  function zoomableMedia(path, title, className = "") {
    const imagePath = resolveImagePath(path);
    return `
      <button class="zoomable-image ${className}" type="button" data-zoom-src="${imagePath}" data-zoom-caption="${title}" aria-label="Enlarge ${title} image">
        <img src="${imagePath}" alt="${title}" loading="lazy" />
        <span class="zoom-hint" aria-hidden="true">Expand ↗</span>
      </button>`;
  }

  function projectMedia(project, className, zoomable = false) {
    if (project.image) {
      const imagePath = resolveImagePath(project.image);
      if (zoomable) return zoomableMedia(project.image, `${project.title} project preview`, className);
      return `<img src="${imagePath}" alt="${project.title} project preview" loading="lazy" />`;
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
    const images = project.images || (project.image ? [project.image] : []);
    const gallery = images
      .map((image, index) => zoomableMedia(image, `${project.title} — image ${index + 1}`))
      .join("");

    return `
      <article class="other-card">
        <div class="other-gallery">${gallery}</div>
        <div class="other-copy">
          <p class="technical-label">${project.label}</p>
          <h3>${project.title}</h3>
          <p>${project.contribution}</p>
        </div>
      </article>`;
  }

  function openProject(slug, updateHistory = true) {
    if (!content || !dialog || !dialogScroll) return;
    const project = content.selectedWork.find((item) => item.slug === slug);
    if (!project) return;

    document.querySelector("#dialog-hero").innerHTML = projectMedia(project, "dialog-pending", true);
    document.querySelector("#dialog-label").textContent = project.label;
    document.querySelector("#dialog-title").textContent = project.title;
    document.querySelector("#dialog-summary").textContent = project.summary;
    document.querySelector("#dialog-meta").innerHTML = `
      <div><dt>Role</dt><dd>${project.role}</dd></div>
      <div><dt>Tools</dt><dd>${project.tools}</dd></div>
      <div><dt>Outcome</dt><dd>${project.outcome}</dd></div>`;

    window.clearTimeout(closeTimer);
    dialog.classList.remove("is-visible");
    dialogScroll.scrollTop = 0;

    if (!dialog.open) dialog.showModal();
    document.body.classList.add("dialog-open");

    requestAnimationFrame(() => {
      dialogScroll.scrollTop = 0;
      dialog.classList.add("is-visible");
    });

    if (updateHistory) {
      const url = new URL(window.location.href);
      url.searchParams.set("project", slug);
      history.pushState({ project: slug }, "", url);
    }
  }

  function closeProject(updateHistory = true) {
    if (!dialog || !dialogScroll || !dialog.open) return;

    dialog.classList.remove("is-visible");
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(() => {
      if (dialog.open) dialog.close();
      document.body.classList.remove("dialog-open");
      dialogScroll.scrollTop = 0;
    }, reducedMotion.matches ? 0 : 500);

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

  if (selectedGrid && content) {
    selectedGrid.innerHTML = content.selectedWork.map(selectedCard).join("");

    selectedGrid.addEventListener("click", (event) => {
      const card = event.target.closest("[data-project]");
      if (card) openProject(card.dataset.project);
    });
  }

  if (otherGrid && content) {
    otherGrid.innerHTML = content.otherWork.map(otherCard).join("");
  }

  if (dialog && closeButton) {
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

    const requestedProject = new URL(window.location.href).searchParams.get("project");
    if (requestedProject) openProject(requestedProject, false);
  }

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("site-nav-open", !open);
    });

    nav.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("site-nav-open");
    });
  }

  const lightbox = document.createElement("dialog");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-label", "Expanded project image");
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close expanded image">Close <span aria-hidden="true">×</span></button>
    <figure class="lightbox-figure">
      <img src="" alt="" />
      <figcaption></figcaption>
    </figure>`;
  document.body.append(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("figcaption");
  const lightboxClose = lightbox.querySelector(".lightbox-close");
  let lightboxTimer;

  function openLightbox(source, caption) {
    window.clearTimeout(lightboxTimer);
    lightboxImage.src = source;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
    if (!lightbox.open) lightbox.showModal();
    document.body.classList.add("lightbox-open");
    requestAnimationFrame(() => lightbox.classList.add("is-visible"));
  }

  function closeLightbox() {
    if (!lightbox.open) return;
    lightbox.classList.remove("is-visible");
    window.clearTimeout(lightboxTimer);
    lightboxTimer = window.setTimeout(() => {
      lightbox.close();
      lightboxImage.src = "";
      document.body.classList.remove("lightbox-open");
    }, reducedMotion.matches ? 0 : 260);
  }

  document.addEventListener("click", (event) => {
    const zoomTarget = event.target.closest("[data-zoom-src]");
    if (zoomTarget) {
      openLightbox(zoomTarget.dataset.zoomSrc, zoomTarget.dataset.zoomCaption || "Expanded project image");
    }
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeLightbox();
  });
})();
