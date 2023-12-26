/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			'sans': 'Lexend Deca, sans-serif',
		},
		extend: {
			spacing: {
				'100': '28rem'
			}
		},
	},
	plugins: [],
};