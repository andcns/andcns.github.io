# Andrei-Constantin Purcăreață — Portfolio Website

[Visit the live portfolio →](https://andcns.github.io/)

Static portfolio website prepared for GitHub Pages. This repository contains presentation material only; source game repositories remain private.

## Preview locally

Run a small local server from the repository root:

```bash
python -m http.server 8000
```

Then open the address printed in the terminal.

## Main content locations

- `content/portfolio.js` — selected-work and other-work cards
- `content/winterlight.js` — Project Winterlight case-study content
- `index.html` — homepage introduction and selected work
- `other-work/index.html` — supporting projects
- `about/index.html` — profile and contact links
- `devlogs/index.html` — current devlog introduction
- `styles.css` — main website visual system
- `winterlight.css` — Winterlight-specific case-study styling
- `assets/images/` — approved portfolio media
- `assets/images/winterlight/` — Project Winterlight media
- `assets/brand/logo-transparent.webp` — current temporary website logo

## Current implementation status

- Homepage hierarchy and responsive layout implemented
- Supporting work and About use dedicated pages
- Mobile Selected Work uses one featured card followed by a compact 2×2 grid
- Project imagery opens in a full-screen zoom viewer
- Other Work uses full-width rows with multi-image galleries
- Selected projects open in a full-screen case-study preview
- Case-study previews always open at the top and use smooth enter/exit motion
- Shareable `?project=project-slug` state implemented
- Romanian PCG devlog route created
- Project Winterlight full case study implemented
- Full CyberShadows and Romanian PCG case-study content still to be added

## Project Winterlight

Winterlight is implemented as a full case study inside the existing project-dialog system.

### Case-study structure

1. Context and immersion research
2. Runtime style-swap architecture
3. Authorship and production transparency
4. Khronovik weapon asset breakdown
5. Enemy synchronisation problem / solution
6. Data-driven ammo system
7. Outcome and reflection
8. 60-second gameplay showcase

The featured Winterlight card uses the runtime visual-transition loop. Technical clips use web-ready MP4s with responsive styling and viewport-based playback.

### Production credits and disclosure

The Winterlight page clearly distinguishes authored work from external resources:

- System design, integration, gameplay implementation, debugging, level layout, visual direction, weapon asset, enemy assets, HUD presentation, research design, testing and evaluation by Andrei-Constantin Purcăreață
- Environment surfaces use licensed paid PBR materials
- CRT presentation uses a commercial post-process asset integrated and tuned for the project
- SFX sourced from Pixabay
- Original music produced by Vlad under Andrei's direction
- C# implementation used AI-assisted coding based on Andrei's system design, requirements, integration, testing and debugging

## Updating Winterlight

When applying the current Winterlight update, replace or add:

- `index.html`
- `content/portfolio.js`
- `content/winterlight.js`
- `winterlight.css`
- `assets/images/winterlight/` — copy the whole folder

The update intentionally leaves the existing `styles.css`, `site.js`, other project pages, brand assets, CV file and non-Winterlight media untouched.

## Deployment

Copy updated files into the repository root while preserving their paths, then commit and push:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will deploy from the configured branch.

## Publishing safety

Add only media that is safe to publish.

Do **not** copy raw project folders, paid asset files, private source repositories, API keys, credentials, licensed source packages, or other private development material into this repository.
