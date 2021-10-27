module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'teal-bg': '#1A8D8D',
				'gray-bg': '#F9F9F9',
				'gray-text': '#E8F1E8',
				'gray-text-2': '#E8F1E8',
				'black-text': '#1B381A',
			},
		},
		fontFamily: {
			Nunito: ['Nunito Sans'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
