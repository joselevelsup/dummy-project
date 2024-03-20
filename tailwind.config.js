/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Comic Neue"]
    }
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["dark", "cupcake"],
  },
}

