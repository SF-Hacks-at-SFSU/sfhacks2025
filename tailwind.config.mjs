/**
 * @type {import('tailwindcss').Config}
 *
 * This probably doesn't do anything because tailwindcss doesn't seem to be using config files for v4
 * @see https://tailwindcss.com/docs/upgrade-guide#using-a-javascript-config-file
 * */
export default {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				sfBlue: "#16133d",
				sfPink: "#16133d",
				sponsorBoxBlue: "#261D4B",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
