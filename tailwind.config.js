/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        "someColor" : "#f72478",
        "sfyellow": "#FFF5D9",
        "login-button": "#D9D9D9",
        sfGreyBlue : '#838FBA',
				sfDarkBlue : '#132A3E',
				sfDarkerBlue: '#132330',
				sfPink: '#FFD6EC',
				sfLightBlue: '#2b455c',
        sfTan: "#FFF5D9",
        sfBloo: "#254d70"
      },
      borderRadius: {
        "4xl" : "2rem"
      }
    },
  },
  plugins: [],
};
