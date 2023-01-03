/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Sans KR', "sans-serif"], 
      },
      keyframes: {
        navbar: {
          "0%" : { transform: 'translateY(-3rem)' },
          "100%" : { transform: 'translateY(-1.25rem)' },
        },
        buttonDisplay: {
          "0%" : { opacity : 0 },
          "100%" : { opacity : 1 },
        },
        bannerImg: {
          "0%" : { opacity : 0 },
          "100%" : { opacity : 1 },
        },
      },
      animation: {
        navbar: "navbar 500ms forwards",
        buttonDisplay: "buttonDisplay 500ms forwards",
        bannerImg: "bannerImg 700ms forwards",
      }
    },
  },
  plugins: [],
}
