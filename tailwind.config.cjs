/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx', './index.html'],
	theme: {
		extend: {
			colors: {
				'black-700': '#121213',
				'blue-300': '#5EDAF1',
				'blue-800': '#1414FF',
				'linkedin': '#0E76A8',
				'instagram': '#D62976',
				'gray-300': '#D9D9D9'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
	darkMode: 'class',
}
