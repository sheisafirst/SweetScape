/** @type {import('tailwindcss').Config} */
import { Flowbite } from 'flowbite-react'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}