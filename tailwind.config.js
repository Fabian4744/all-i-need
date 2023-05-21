/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'windows-grey': '#C0C0C0',
        'windows-lightgrey': '#D9E4EA',
        'windows-darkgrey': '#808082',
        'windows-blue': '#008081',
      },
    },
  },
  plugins: [],
}