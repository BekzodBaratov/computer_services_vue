/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sx: "320px",
        xs: "375px",
        sm: "576px",
        ss: "650px",
        md: "768px",
        mmd: "800px",
        lg: "992px",
        xl: "1200px",
        xxl: "1536px",
      },
      colors: {
        primary: "#002e69",
        danger: "#D52C55",
        whiteBlue: "#AECBF4",
        primaryBlue: "#4F87D3",
        blue100: "#E7F0FE",
      },
      aspectRatio: {
        "10/4": "10 / 4",
        "10/3": "10 / 3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
