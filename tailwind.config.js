/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "climitra-green": "#1C6248",
        "climitra-light-green": "#6BBD4E",
        "climitra-bg-green": "#E7FFF7",
        "climitra-text": "#6C6C6C",
        "climitra-dark": "#0C0C0C",
        "climitra-primary": "#0F161E",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        "source-sans": ["Source Sans Pro", "system-ui", "sans-serif"],
        sofia: ["Sofia Pro", "system-ui", "sans-serif"],
      },
      aspectRatio: {
        2.1: "2.1",
        34.48: "34.48",
        1.775: "1.775",
        1.78: "1.78",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
