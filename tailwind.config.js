/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        'accent-yellow': '#FCD34D',
        'accent-blue': '#60A5FA',
        surface: '#0C0C1D',
        'surface-secondary': '#12121F',
        'text-secondary': '#9A9AB0',
        'border': '#1E1E2D',
        'input': '#0F0F1C',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(249, 212, 35, 0.2)',
        'card': '0 4px 20px rgba(7, 7, 20, 0.5)',
      },
    },
  },
  plugins: [],
} 