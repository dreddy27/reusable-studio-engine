# Reusable Studio Engine

A reusable starter template for quickly beginning interactive Canvas assignments with clear intent, structure, and deployment.

## Run locally

Option 1 (quick):
1. Open `index.html` in a browser.

Option 2 (recommended local server):
1. In terminal, go to this folder.
2. Run: `python3 -m http.server 8000`
3. Open: `http://localhost:8000`

## Deploy

### GitHub Pages
1. Push this repo to GitHub.
2. Open Repo Settings → Pages.
3. Under "Build and deployment", set Source to "Deploy from a branch".
4. Set branch to `main` and folder to `/(root)`.
5. Save and wait for the URL.

### Cloudflare Pages (alternative)
1. Create project in Cloudflare Pages.
2. Connect this GitHub repo.
3. Framework preset: None.
4. Build command: leave blank.
5. Output directory: `/`.

## How I use this to start projects

1. Write `docs/SYSTEM_CHARTER.md` first (intent + constraints + tensions).
2. Confirm one signal, one parameter, and one visible behavior.
3. Get the smallest Canvas behavior running.
4. Take process screenshots and update `process/changelog.md`.
5. Deploy and share a live link.
