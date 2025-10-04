// tailwind.config.ts
export default {
  content: [
    "./index.html", 
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "rat-gold": "#f79f1a", // golden warmth
        "rat-red": "#7B2D26",  // wine red
        "rat-navy": "#2C3E50", // deep navy
        "rat-cream": "#F5F3E7", // parchment background
        "rat-green": "#708238", // herb accent
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}
