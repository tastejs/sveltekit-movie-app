const plugin = require('tailwindcss/plugin')
const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {	 
			borderColor: {
				skin: {
					border: 'var(--color-border)'
				},
			},
			textColor: {
				skin: {
					base: 'var(--color-text-base)',
					muted: 'var(--color-text-muted)',
					inverted: 'var(--color-text-inverted)',
					selected: 'var(--color-text-selected)',
					mutedinverted: 'var(--color-text-muted-inverted)'

				},
			},
			backgroundColor: {
				skin: {
					primary: 'var(--color-primary)',
					secondary: 'var(--color-secondary)',
					tertiary: 'var(--color-tertiary)',
					bg: 'var(--color-bg)',
					border: 'var(--color-border)',
					selected: 'var(--color-selected)'				
				},
			},
			fontFamily: {
			  body: ['Raleway']
			},
  
			spacing: {
			  '5': '1.125rem',
			  '18': '4.5rem',
			  '42': '10.5rem',
			  '66': '16.5rem',
			  '72': '18rem',
			  '90': '22.5rem',
			  '100': '25rem',
			  '104': '26rem',
			  '108': '27rem',
			  '112': '28rem',
			  '120': '30rem',
			  '16/9': '56.25%'
			},
			scale: {
			  '60': '0.6',
			  '44': '0.44'
			},
			gridTemplateRows: {
			'auto': 'repeat(auto-fill, minmax(0,auto))',
			},
	  
		  },
		},
		  variants: {
	  
		  extend: {
			backgroundColor: ['active'],
			transform: ['group-hover']
		  },
		},
		plugins: [
			plugin(function({ addUtilities }) {
			  const newUtilities = {
				'.preserve-3d': {
				  'transform-style': 'preserve-3d',
				},
				'.perspective-1000' :{
				  'perspective': '1000px',
				},
				'.backface-hidden' :{
				'backface-visibility': 'hidden',
				},
				'.rotate-y-0': {
				  transform: 'rotateY(0deg)'
				},
				'.rotate-y-180': {
				  transform: 'rotateY(180deg)'
				},
			  }
		
			  addUtilities(newUtilities, ['group-hover'])
			}),
			require('@tailwindcss/line-clamp')
		  ],
};

module.exports = config;
