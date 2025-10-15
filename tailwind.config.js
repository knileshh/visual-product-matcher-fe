/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        dark: {
          bg: {
            from: '#0a0e27',
            to: '#1a1f3a',
          },
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#ec4899',
        },
        // Light theme colors
        light: {
          bg: {
            from: '#f0f4ff',
            to: '#dbeafe',
          },
          primary: '#4f46e5',
          secondary: '#7c3aed',
          accent: '#db2777',
          text: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            'box-shadow': '0 0 20px rgba(99, 102, 241, 0.5)',
          },
          'to': {
            'box-shadow': '0 0 30px rgba(139, 92, 246, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
