/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"primary-900": "#0f0c1d",
			"primary-600": "#10163a",
			"primary-300": "#262c49",
			"primary-100": "#7367f0",
			"secondary-white": "#ebeefd",
			"secondary-grey": "#c2c6dc",
			"secondary-green": "#35a936",
			"secondary-red": "#ea5455",
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
