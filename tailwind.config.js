/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	plugins: [
		require("nativewind/dist/tailwind/safe-area").safeArea,
	],
}
