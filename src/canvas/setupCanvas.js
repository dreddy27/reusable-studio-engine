export function setupCanvas(canvas) {
	const context = canvas.getContext("2d");

	function resize() {
		const dpr = Math.max(1, window.devicePixelRatio || 1);
		const width = window.innerWidth;
		const height = window.innerHeight;

		canvas.width = Math.floor(width * dpr);
		canvas.height = Math.floor(height * dpr);
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;

		context.setTransform(dpr, 0, 0, dpr, 0, 0);
	}

	resize();
	window.addEventListener("resize", resize);

	return { context, resize };
}
