# Winterlight mobile video fix

Replace:

- `content/winterlight.js`
- `index.html`

Then commit and push.

What changed:

- Winterlight loop videos now request `autoplay`, `muted`, `playsinline`, `webkit-playsinline`, and `preload="auto"`.
- The script also sets the equivalent DOM properties before attempting playback.
- Dynamically inserted hero and case-study videos are explicitly loaded and played.
- Visible videos are retried on the first tap/click, `pageshow`, and when the page becomes visible again.
- IntersectionObserver remains in place so off-screen technical loops pause.
- Cache query for `winterlight.js` was bumped to `v=3`.
