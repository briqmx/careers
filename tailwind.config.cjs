/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Archia"', 'sans-serif'],
				body: ['"Inter"', 'sans-serif'],
			},
			colors: {
				'blue' : '#1AC2FF',
				'navy' : '#041C2C',
				'bone' : "#F2F4F4"
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
