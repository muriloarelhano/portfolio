/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			print: { raw: 'print' }
		},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px'
			}
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};
