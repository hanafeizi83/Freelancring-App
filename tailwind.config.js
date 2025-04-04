/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

function colorWithOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding:'1rem'
      },
      colors: {
        primary: {
          100: colorWithOpacity('--color-primary-100'),
          200: colorWithOpacity('--color-primary-200'),
          300: colorWithOpacity('--color-primary-300'),
          400: colorWithOpacity('--color-primary-400'),
          500: colorWithOpacity('--color-primary-500'),
          600: colorWithOpacity('--color-primary-600'),
          700: colorWithOpacity('--color-primary-700'),
          800: colorWithOpacity('--color-primary-800'),
          900: colorWithOpacity('--color-primary-900')
        },
        secondary: {
          0: colorWithOpacity('--color-secondary-0'),
          100: colorWithOpacity('--color-secondary-100'),
          200: colorWithOpacity('--color-secondary-200'),
          300: colorWithOpacity('--color-secondary-300'),
          400: colorWithOpacity('--color-secondary-400'),
          500: colorWithOpacity('--color-secondary-500'),
          600: colorWithOpacity('--color-secondary-600'),
          700: colorWithOpacity('--color-secondary-700'),
          800: colorWithOpacity('--color-secondary-800'),
          900: colorWithOpacity('--color-secondary-900')
        },
        error: colorWithOpacity('--color-error'),
        warning: colorWithOpacity('--color-warning'),
        success: colorWithOpacity('--color-success'),
        purple: colorWithOpacity('--color-purple'),
        pink: colorWithOpacity('--color-pink'),
        green: colorWithOpacity('--color-green')
      },
      fontFamily: {
        sans: ['Vazir', ...fontFamily.sans],
        arahala: 'Arahala',
        ordibehesht: 'Ordibehesht'
      }
    },
  },
  plugins: [],
}

