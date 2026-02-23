# AI Collaboration Record

## Project
- Repo: https://github.com/dreddy27/reusable-studio-engine
- Deployed link (if applicable): TBD
- Date started: 2026-01-08

Note: Entry log pulls from my six most recent active projects.

## My constraints (before any AI)
- Intent (1 sentence): Build small, legible interactive systems where behavior is understandable within a few seconds.
- Constraints (3):
  1. Keep features minimal and testable.
  2. Use existing stack only (HTML/CSS/JS), no new libraries.
  3. Preserve readability over visual novelty.
- Tension (1): Hold clarity while allowing a little motion drift.
- Taste vow (1): I refuse to hide weak ideas behind visual effects.

---

## Entry Log

### Entry 01 — (2026-02-19)
**My next move (write before AI):**
- Project: self-as-system-v2.
- Make startup architecture cleaner so future edits stay modular.

**Files touched:**
- index.html
- script.js
- src/canvas/loop.js
- src/input/input.js

**Copilot prompt (paste exact prompt):**
- Context: I am building self-as-system-v2 and need clean structure for repeatable interaction builds.
  Target: Refactor startup flow so input and draw logic are separated and easy to trace.
  Constraints: no new libraries, no feature additions, keep existing visual behavior.
  Acceptance test: page loads with same behavior and no console errors after refactor.

**Copilot output (summarize in 3–6 bullets):**
- Suggested splitting responsibilities into setup, input, and render flow.
- Proposed cleaner naming for state values.
- Preserved existing behavior while reducing coupling.

**My translation (what changed and why):**
- I reorganized flow without changing the output so the project is easier to debug and extend intentionally.

**Signal / Noise:**
- Signal: Code path became legible.
- Noise: Suggestions for extra utility layers were unnecessary.

**Next right action (one sentence):**
- Verify resize and timing consistency in the next build.

---

### Entry 02 — (2026-02-16)
**My next move (write before AI):**
- Project: self-as-system-build-v1.
- Stabilize the interaction loop before adding any polish.

**Files touched:**
- script.js
- style.css

**Copilot prompt (paste exact prompt):**
- Context: self-as-system-build-v1 has an interaction that feels inconsistent across frame rates.
  Target: Improve animation timing so behavior is stable and not jumpy.
  Constraints: no new features, no libraries, keep original visual language.
  Acceptance test: motion feels continuous after tab switches and across normal refresh rates.

**Copilot output (summarize in 3–6 bullets):**
- Introduced delta-time based update rhythm.
- Suggested clamping large frame gaps.
- Kept render/update order predictable.

**My translation (what changed and why):**
- I made timing stable so the same action produces the same feel on different machines.

**Signal / Noise:**
- Signal: Consistent behavior timing.
- Noise: Optional easing layers made behavior less clear, so I skipped them.

**Next right action (one sentence):**
- Tune one input mapping to make control intent obvious.

---

### Entry 03 — (2026-02-04)
**My next move (write before AI):**
- Project: Calm-Engine.
- Simplify interaction so one input controls one visible parameter.

**Files touched:**
- script.js
- style.css

**Copilot prompt (paste exact prompt):**
- Context: Calm-Engine should stay minimal and legible as an interaction sketch.
  Target: Map one pointer value to one visual parameter and remove conflicting effects.
  Constraints: no particles, no extra states, no library, keep code short.
  Acceptance test: a viewer can identify cause/effect in under 5 seconds.

**Copilot output (summarize in 3–6 bullets):**
- Proposed direct mapping from pointer to visual parameter.
- Helped remove overlapping style effects.
- Kept loop logic compact and readable.

**My translation (what changed and why):**
- I reduced visual noise so the core interaction reads immediately.

**Signal / Noise:**
- Signal: Clear one-to-one mapping.
- Noise: Decorative animation suggestions distracted from intent.

**Next right action (one sentence):**
- Validate edge behavior and keep only what improves readability.

---

### Entry 04 — (2026-02-01)
**My next move (write before AI):**
- Project: Proof-of-Life.
- Fix the core bug preventing reliable display updates.

**Files touched:**
- Index.html

**Copilot prompt (paste exact prompt):**
- Context: Proof-of-Life is a tiny page and output is failing intermittently.
  Target: Diagnose and fix the minimal HTML/JS issue causing render failure.
  Constraints: no redesign, no additional pages, keep it minimal.
  Acceptance test: page loads and the expected visible output appears every refresh.

**Copilot output (summarize in 3–6 bullets):**
- Identified a small structural issue in the page setup.
- Suggested a minimal correction path.
- Kept the fix constrained to the failing surface.

**My translation (what changed and why):**
- I fixed reliability first instead of adding features, so the base behavior now consistently works.

**Signal / Noise:**
- Signal: Stable baseline output.
- Noise: Extra style suggestions were not relevant to the bug.

**Next right action (one sentence):**
- Add one small test checklist to prevent the same regression.

---

### Entry 05 — (2026-02-01)
**My next move (write before AI):**
- Project: critique-field-manual.
- Make the interaction text and controls more legible without expanding scope.

**Files touched:**
- index.html
- script.js
- style.css

**Copilot prompt (paste exact prompt):**
- Context: critique-field-manual should prioritize readability and simple interaction.
  Target: Refactor UI copy and script structure for clarity without changing project scope.
  Constraints: no new pages, no framework, no visual overhaul.
  Acceptance test: first-time user can understand controls and outcome in one pass.

**Copilot output (summarize in 3–6 bullets):**
- Suggested simplifying labels and reducing ambiguous text.
- Proposed small script cleanup for readability.
- Kept interactions intact.

**My translation (what changed and why):**
- I improved legibility so critique intent is clearer without adding complexity.

**Signal / Noise:**
- Signal: Clearer language and clearer control flow.
- Noise: Suggestions for extra animation would have diluted the critique focus.

**Next right action (one sentence):**
- Keep edits small and commit after each readable improvement.

---

### Entry 06 — (2026-01-08)
**My next move (write before AI):**
- Project: Top Recipes.
- Improve structure and semantics so content is clearer and easier to maintain.

**Files touched:**
- index.html

**Copilot prompt (paste exact prompt):**
- Context: Top Recipes is a static page project and structure is getting messy.
  Target: Clean semantic HTML structure and keep content readable.
  Constraints: no new libraries, no redesign beyond structure cleanup, keep one-page layout.
  Acceptance test: page structure is semantic, headings are consistent, and content remains unchanged.

**Copilot output (summarize in 3–6 bullets):**
- Proposed semantic section grouping for content blocks.
- Suggested heading hierarchy cleanup.
- Kept output static and minimal.

**My translation (what changed and why):**
- I improved document clarity and maintainability without changing project scope.

**Signal / Noise:**
- Signal: Better content structure and readability.
- Noise: Suggestions for advanced interactivity did not fit this project.

**Next right action (one sentence):**
- Continue logging each small move immediately after implementation.
