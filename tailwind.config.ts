/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '.my-app-dark'], // 使用自定义类名
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dkBg: '#0f172a', 
        wtBg: '#fff',  
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}

