import { mapRange } from "../utils/math.js";

export function startLoop({ context, canvas, input }) {
	let lastTime = performance.now();
	let pulseTime = 0;

	function frame(now) {
		const dt = Math.min(0.05, (now - lastTime) / 1000);
		lastTime = now;

		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const centerX = width * 0.5;
		const centerY = height * 0.5;

		const baseRadius = mapRange(input.mouseX01, 0, 1, 40, 180);
		const pulseSpeed = mapRange(baseRadius, 40, 180, 1.0, 5.0);
		pulseTime += dt * pulseSpeed;
		const pulse = 1 + 0.15 * Math.sin(pulseTime * Math.PI * 2);
		const radius = baseRadius * pulse;

		context.clearRect(0, 0, width, height);
		context.fillStyle = "#0b0d10";
		context.fillRect(0, 0, width, height);

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2);
		context.strokeStyle = "#e8f0ff";
		context.lineWidth = 4;
		context.stroke();

		requestAnimationFrame(frame);
	}

	requestAnimationFrame(frame);
}
