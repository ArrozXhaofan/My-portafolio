/** @type {import('tailwindcss').Config} */

const textShadowPlugin = require('tailwindcss-textshadow');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-hello": ["sf-hello"],
        "sf-black": ["sf-black"],
        "sf-bold": ["sf-bold"],
        "sf-medium": ["sf-medium"],
        "sf-regular": ["sf-regular"],
        "sf-semibold": ["sf-semibold"],
        "sf-thin": ["sf-thin"],
        "sf-ultrathin": ["sf-ultrathin"],
        "sf-regular-rounded": ["sf-regular-rounded"],
        "sf-semibold-rounded": ["sf-semibold-rounded"],
      },
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 204, 153, 0.6), 0 0 24px rgba(255, 102, 0, 0.8), 0 0 36px rgba(255, 102, 0, 1)',
      },
    },
  },
  plugins: [textShadowPlugin],
}