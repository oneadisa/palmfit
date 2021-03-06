module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors:{
				'dark-green': 'rgba(26, 141, 141, 1)',
				'light-gray': 'rgba(246, 2251, 251, 1)',
				'light-purple': 'rgba(247, 248, 255, 1)',
				'light-cream': 'rgba(255, 252, 250, 1)',
				teal:'#1A8D8D',
				background:'#F6FBFB',
				'teal-bg': '#1A8D8D',
				'gray-bg': '#F9F9F9',
				'gray-text': '#E8F1E8',
				'gray-text-2': '#E8F1E8',
				'black-text': '#1B381A',
			},
			fontFamily:{
				body: 'Nunito-Sans', 
				head: 'PT-Serif',	
				Nunito: ['Nunito Sans'],
			}
		},
		container: {
			center: true,
			padding: '1rem',
			screens:{
				lg: '1124px',
				xl: '1124px',
				'2xl': "1124px"
			}
		}
	
		},
	
	variants: {
		extend: {},
	},
	plugins: [],
}
