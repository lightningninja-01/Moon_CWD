/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A234A",
        secondary: "#5B7DA5",
        accent: "#A8BED7",
        background: "#F8FBFD",
        surface: "#FFFFFF",
        border: "#DCE5EF",
        heading: "#10294B",
        body: "#46566B",
        muted: "#7B8A9D",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card': ['28px', { lineHeight: '1.3' }],
        'para': ['18px', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 35, 74, 0.03), 0 2px 8px -1px rgba(10, 35, 74, 0.02)',
        'soft-lg': '0 12px 35px -4px rgba(10, 35, 74, 0.05), 0 4px 16px -2px rgba(10, 35, 74, 0.03)',
      }
    },
  },
  plugins: [],
}
