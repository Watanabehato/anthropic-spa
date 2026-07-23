/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FAF9F5',
          DEFAULT: '#F0EEE6',
          dark: '#E5E3D8',
        },
        ink: {
          DEFAULT: '#141413',
          soft: '#3D3D3A',
          mute: '#76756E',
        },
        clay: {
          DEFAULT: '#D97757',
          dark: '#C25E3E',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      maxWidth: {
        site: '72rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
