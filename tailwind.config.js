/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			mobile: '320px',
			sm: '375px',
			lm: '420px',
			tablet: '640px',
			md: '768px',
			laptop: '1024px',
			desktop: '1280px'
			// @media (max-width: theme('screens.desktop')) {}
			// @screen mobile {}
		},

		extend: {
			colors: {
				primary: 'var(--primary)',
				lightGrey: 'var(--light-grey)'
			}
		}
	},
	plugins: []
};
