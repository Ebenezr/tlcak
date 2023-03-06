/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        bg: "#FFFAFB",
        primary: {
          50: "#FFC9D5",
          100: "#de879a",
          200: "#84283c",
          300: "#680218",
          400: "#520012",
          500: "#33000b",
        },
        primary_var: "#680217",
        accent: "#F6E94F",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        spectral: ["var(--font-spectral)"],
      },
      boxShadow: {
        imgShadow: "inset 0 0 0 1px hsla(0,0%,0%,.1)",
      },
    },
  },
  plugins: [],
};
