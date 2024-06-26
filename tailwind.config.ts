import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#172b4d",
        body: "#344563",
        voilet: "#0000EE",
        link: "#396DF2",
        dark: "rgb(14, 17, 17)"

      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      backgroundImage: {
        'hero': "url('/svg/headline-background.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
 
    // other plugins
  ],
};
export default config;
