// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable sort-keys */
module.exports = {
	important: true,
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['var(--font-poppins)']
			},
			colors: {
				app_background: 'var(--app_background)',
				light_orange_primary: 'var(--light_orange_primary)',
				orange_primary: 'var(--orange_primary)',
				orange_secondary: 'var(--orange_secondary)',
				sky_blue_primary: 'var(--sky_blue_primary)',
				sky_blue_secondary: 'var(--sky_blue_secondary)',
				yellow_primary: 'var(--yellow_primary)',
				green_primary: 'var(--green_primary)',
				pink_primary: 'var(--pink_primary)',
				red_primary: 'var(--red_primary)'
			},
			screens: {
				xs: '320px'
			},
			borderRadius: {
				xxl: '0.875rem'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'rhs-card-gradient': 'linear-gradient(97deg, #04d9bb 0.25%, #06d7bb 0.26%, #6e49c9 112.25%)',
				'rhs-indicator-gradient': 'linear-gradient(153deg, #08D4BB 16.67%, #6F47C9 100%)'
			}
		}
	},
	plugins: [],
	corePlugins: {
		preflight: false
	}
};
