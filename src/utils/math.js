export function clamp(value, min, max) {
	return Math.max(min, Math.min(max, value));
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
	if (inMax === inMin) return outMin;
	const t = (value - inMin) / (inMax - inMin);
	return outMin + (outMax - outMin) * t;
}
