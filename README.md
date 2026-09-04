# Winterlight final polish fix

Replace / add these files in the portfolio repo:

- `index.html`
- `content/winterlight.js`
- `winterlight.css`
- `assets/images/winterlight/gun-wire-modern.webp`
- `assets/images/winterlight/gun-wire-retro.webp`

Changes in this patch:

- Preserves the mobile autoplay/video reliability fix.
- Corrects the wireframe identities:
  - Modern = higher-poly topology image.
  - Retro = lower-poly topology image.
- Forces both wireframe comparison cards to the same aspect ratio and visual height.
- Changes the music prose to `music producer` rather than naming Vlad in the sentence.
- Bumps Winterlight CSS/JS cache versions to `v=4`.

After replacing the files, commit and push. On mobile, refresh once after GitHub Pages finishes deploying.
