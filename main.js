import { setupCanvas } from "./src/canvas/setupCanvas.js";
import { createInput } from "./src/input/input.js";
import { startLoop } from "./src/canvas/loop.js";

const canvas = document.getElementById("app-canvas");

if (!(canvas instanceof HTMLCanvasElement)) {
	throw new Error("Canvas element #app-canvas was not found.");
}

const { context } = setupCanvas(canvas);
const input = createInput(canvas);

startLoop({ context, canvas, input });
