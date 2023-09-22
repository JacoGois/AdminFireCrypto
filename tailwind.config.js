const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        screenLayout: 'calc(100vh - 4rem)',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '64px',
        100: '400px',
      },
      borderRadius: {
        1: '4px',
        2: '8px',
      },
      fontSize: {
        xxs: '8px',
        xs: '10px',
        sm: '12px',
        base: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '56px',
      },
      minHeight: {
        1: '300px',
        2: '400px',
      },
    },
    colors: {
      ...colors,
      black: '#000000',
      white: '#F6FBFD',
      surface: '#FFFFFF',
      background: '#F2F4F7',
      text: { DEFAULT: '#4C5668', 500: '#212121', secundary: '#757575' },
      blue: {
        100: '#9ABECC',
        200: '#5B6B7A',
      },
      gray: {
        DEFAULT: '#101828',
        100: '#EAECF0',
        200: '#D0D5DD',
        300: '#98A2B3',
        400: '#657085',
        500: '#475467',
        600: '#344054',
        700: '#1D2939',
      },
      primary: {
        DEFAULT: '#444CE7',
        light: '#E0EAFF',
        light2: '#F9FAFB',
        light3: '#666eea',
      },
      secundary: { DEFAULT: '#191970', 500: '#013A36' },
      tertiary: { 500: '#ffffff' },
      positive: '#039855',
      negative: '#D92D20',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    variants: {
      opacity: ({ after }) => after(['disabled']),
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
