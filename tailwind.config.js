/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16205a',
        accent: '#005fa3',
        'header-bg': '#f1f3f6',
        'footer-bg': '#f1f3f6',
        'footer-text': '#666',
        text: '#1a1a1a',
        'section-bg': '#f7f9fb',
        'card-bg': '#eef1f5',
      }
    },
  },
  plugins: [],
}