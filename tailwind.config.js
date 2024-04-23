/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', '*.{html,js}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1635px',
        },
      },
      colors: {
        primary: '#575656',
        secondary: '#D1050C',
        tertiary: '#C5C6C6',
        redish: '#D71920',
        light: '#F9F9F9',
        'menu-head': '#F3F3F3',
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-out-up': 'fade-out-up 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        'fade-out-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
