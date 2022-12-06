const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./{pages,components,screens}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        // xl: '1280px',
      },
    },
    fontFamily: {
      sans: ['Khmer CN Battambang', 'open sans', ...defaultTheme.fontFamily.sans],
      heading: ['Kh Jrung Thom', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      /**
       * Reference Code Generate
       * https://www.tailwindshades.com/#color=0%2C84.23645320197043%2C60.19607843137255&step-up=8&step-down=11&hue-shift=0&name=flamingo&base-stop=4&overrides=e30%3D
       */
      colors: {
        primary: {
          DEFAULT: '#EF4444',
          '50': '#FAC8C8',
          '100': '#F9B5B5',
          '200': '#F58F8F',
          '300': '#F26A6A',
          '400': '#EF4444',
          '500': '#E71414',
          '600': '#B30F0F',
          '700': '#800B0B',
          '800': '#4C0707',
          '900': '#180202'
        },
        background: '#f4f4f4',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};