/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "web-primary-1": "#363738",
        "web-primary-2": "#FFFFFF",
        "web-secondary-1": "#FEFAF1",
        "web-secondary-2": "#F5F5F5",
        "web-secondary-3": "#DB4444",
        "text-1": "#FAFAFA",
        "text-2": "#7D8184",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
