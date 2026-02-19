# PROMPTS — Copilot control file

## Context block (paste before every prompt)
I am building a pure Canvas starter template.
Existing files:
- /index.html
- /style.css
- /main.js
- /src/canvas/setupCanvas.js
- /src/canvas/loop.js
- /src/input/input.js
- /src/utils/math.js
Rules:
- One input signal
- One dominant behavior
- One visual form
- No libraries

## Prompt template 1 — Canvas draw loop
Task: Help me implement a minimal animation loop in /src/canvas/loop.js.
Requirements:
- requestAnimationFrame loop
- clear canvas each frame
- draw one ring only
- expose time delta (dt)
Return:
1) Code changes only
2) 3-bullet explanation in plain language

## Prompt template 2 — Input mapping
Task: Help me map mouse X to a single variable.
Requirements:
- Track pointer position in /src/input/input.js
- Normalize from 0 to 1
- Use mapping helper from /src/utils/math.js
Return:
1) Code changes only
2) A short explanation of where data flows

## Prompt template 3 — Debugging
Task: My Canvas sketch is not showing expected behavior.
Check:
- Is canvas HiDPI scaling correct?
- Is animation loop running?
- Is input listener attached?
- Is mapped value changing each frame?
Return:
1) Likely root cause
2) Exact file + function to fix
3) Minimal patch

## Non-negotiable rule
After every AI response, I write my own explanation of what changed and why before I continue.
