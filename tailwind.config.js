/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [],
}