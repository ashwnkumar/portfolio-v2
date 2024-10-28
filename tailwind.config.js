/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "card-background": "rgba(var(--card-background))",
        text: "rgba(var(--text))",
        subtext: "rgba(var(--subtext))",
        button: "rgba(var(--button))",
        "button-hover": "rgba(var(--button-hover))",
        "button-active": "rgba(var(--button-active))",
        border: "rgba(var(--border))",
      },
    },
  },
  plugins: [],
};
