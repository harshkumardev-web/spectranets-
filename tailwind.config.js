/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0756D9',
          navy: '#071B49',
          secondary: '#2684F7',
          light: '#F5F8FF',
          darkText: '#17233D',
          border: '#E2E8F0',
          accent: '#00D2FF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cabinet Grotesk', 'sans-serif']
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(7, 27, 73, 0.08), 0 4px 6px -2px rgba(7, 27, 73, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(7, 86, 217, 0.16), 0 8px 16px -4px rgba(7, 27, 73, 0.08)',
        'glow': '0 0 35px -5px rgba(38, 132, 247, 0.35)',
        'glow-primary': '0 0 40px -5px rgba(7, 86, 217, 0.4)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'beam': 'beam 3s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        }
      }
    },
  },
  plugins: [],
}
