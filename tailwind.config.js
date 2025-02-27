/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: 'rgb(var(--dark-rgb))', 
      },
      cursor: {
        custom: 'url("https://img.icons8.com/stamp/32/FFFFFF/cursor.png"), pointer',
        hover:  'url("https://img.icons8.com/stamp/32/625eeb/cursor.png"), pointer',
    },
    },
  },
  plugins: [],
};
