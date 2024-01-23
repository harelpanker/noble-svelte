/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter'],
				polysans: ['polysans']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
