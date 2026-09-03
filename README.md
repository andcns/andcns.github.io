# Andrei-Constantin Purcăreață — portfolio website

[Visit the live portfolio →](https://andcns.github.io/)

Static portfolio website prepared for GitHub Pages. The website repository contains presentation material only; source game repositories remain private.

## Preview locally

Run a small local server from this folder, then open the address it prints:

```bash
python -m http.server 8000
```

## Edit the content

- `content/portfolio.js` contains the selected-work and other-work cards.
- `index.html` contains the homepage introduction and selected work.
- `other-work/index.html` contains supporting projects.
- `about/index.html` contains the profile and contact links.
- `devlogs/index.html` contains the current devlog introduction.
- `styles.css` controls the complete visual system.
- `assets/images/` contains approved portfolio media.
- `assets/brand/logo-board.png` is the temporary logo sheet.

Add only media that is safe to publish. Never copy raw project folders, paid assets, private source files or development credentials into this repository.

## Current implementation status

- Homepage hierarchy and responsive layout implemented.
- Supporting work and About use dedicated pages.
- Mobile selected work uses one featured card followed by a compact 2×2 grid.
- Selected projects open in a full-screen case-study preview.
- Case-study previews always open at the top and use smooth enter/exit motion.
- Shareable `?project=project-slug` state implemented.
- Romanian PCG devlog route created.
- Full case-study content and real CyberShadows/Romanian PCG media remain to be added.
