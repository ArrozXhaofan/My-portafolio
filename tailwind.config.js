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
        "sf-text-medium": ["sf-text-medium"],
      },
      textShadow: {
        glow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 16px rgba(255, 204, 153, 0.6), 0 0 24px rgba(255, 102, 0, 0.8), 0 0 36px rgba(255, 102, 0, 1)',
        glowBluePurpleCyan: '0 0 8px rgba(102, 204, 255, 0.8), 0 0 16px rgba(102, 153, 255, 0.6), 0 0 24px rgba(153, 51, 255, 0.8), 0 0 36px rgba(0, 255, 255, 1)',

      },
      dropShadow: {
        'project': [
          '0px 0px 5px rgba(191, 66, 245, 1)',
          '0px 0px 4px rgba(245, 212, 66, 0.3)',
        ],
      },

    },
  },
  plugins: [textShadowPlugin],
}