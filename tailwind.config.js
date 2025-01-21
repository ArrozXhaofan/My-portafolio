/** @type {import('tailwindcss').Config} */



const textShadowPlugin = require('tailwindcss-textshadow');


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#007aff',
        'secodary': '#1C1C1C',
        'sf-gray': '#A1A1A6'
      },
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
        'project-cyan': [
          '0px 0px 8px rgba(223, 102, 255, 1)',  // Más brillante y rosado
          '0px 0px 6px rgba(66, 173, 245, 0.5)',  // Más azul con mayor opacidad
        ],
      },

    },
  },
  plugins: [textShadowPlugin],
}