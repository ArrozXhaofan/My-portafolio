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
        'sf-gray': '#A1A1A6',
        'white-inicio': '#FAFAFA',
        'gray-me': '#1D1D20'
      },
      fontFamily: {
        "sf-hello": ["sf-hello","sans-serif"],
        "sf-medium": ["sf-medium", "sans-serif"],
        "sf-regular": ["sf-regular", "sans-serif"],
        "sf-semibold": ["sf-semibold", "sans-serif"],
        "sf-thin": ["sf-thin", "sans-serif"],
        "sf-ultrathin": ["sf-ultrathin"],
        "sf-regular-rounded": ["sf-regular-rounded", "sans-serif"],
        "sf-semibold-rounded": ["sf-semibold-rounded", "sans-serif"],
        "sf-text-medium": ["sf-text-medium", "sans-serif"],
        "hel-neue": ["hel-neue", "sans-serif"]
      },
      boxShadow: {
        'inner-gradient': [
          'inset 10px 10px 10px rgba(47, 118, 206, 0.9)',
          'inset -10px -10px 10px rgba(192, 69, 150, 0.9)',
          'inset  0px 0px 20px rgba(202, 106, 23, 1)',
        ]
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