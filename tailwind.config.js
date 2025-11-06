/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gray1: "#B5B5B5",
        gray2: "#E5E5E5",
        orange: "#F48B00",
        blue: "#004EFF",
        primary: "#5B7F6F",
      },
      fontFamily: {
        sans: ["'Zen Kaku Gothic New'", "'Urbanist'", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
      },
      borderRadius: { lg: "0.75rem" },
    },
  },
  plugins: [],
};
