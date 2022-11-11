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
      sans: ['Kantumruy', 'Titillium Web', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          '50': '#FF9D27',
          '100': '#F8931D',
          '200': '#F6871B',
          '300': '#F57A18',
          '400': '#F46E16',
          '500': '#F36315',
          '600': '#F25E14',
          '700': '#F15B13',
          '800': '#F05812',
          '900': '#EF5511',
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
