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
      // sans: ['Kantumruy', 'Titillium Web', ...defaultTheme.fontFamily.sans],
      sans: ['open sans', 'Khmer CN Battambang', ...defaultTheme.fontFamily.sans],
      heading: ['Kh Jrung Thom', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      /**
       * Reference Code Generate
       * https://www.tailwindshades.com/#color=0%2C84.23645320197043%2C60.19607843137255&step-up=8&step-down=11&hue-shift=0&name=flamingo&base-stop=4&overrides=e30%3D
       */
      colors: {
        primary: {
          DEFAULT: '#FFC107',
          '50': '#FFEFBF',
          '100': '#FFEAAA',
          '200': '#FFE081',
          '300': '#FFD559',
          '400': '#FFCB30',
          '500': '#FFC107',
          '600': '#CE9A00',
          '700': '#967000',
          '800': '#5E4600',
          '900': '#261C00'
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