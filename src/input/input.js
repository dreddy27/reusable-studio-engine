import { clamp } from "../utils/math.js";

export function createInput(canvas) {
	const state = {
		mouseX01: 0.5,
		mouseY01: 0.5,
	};

	function updateFromEvent(event) {
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width;
		const y = (event.clientY - rect.top) / rect.height;
		state.mouseX01 = clamp(x, 0, 1);
		state.mouseY01 = clamp(y, 0, 1);
	}

	window.addEventListener("mousemove", updateFromEvent);

	return state;
}
