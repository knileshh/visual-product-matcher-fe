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
        // Dark theme colors - Electric Violet & Neon Blue
        dark: {
          bg: {
            from: '#030014',
            to: '#150025',
          },
          primary: '#a855f7',
          secondary: '#3b82f6',
          accent: '#22d3ee',
        },
        // Light theme colors - Soft Violet & Sky
        light: {
          bg: {
            from: '#faf5ff',
            to: '#f0f9ff',
          },
          primary: '#9333ea',
          secondary: '#2563eb',
          accent: '#0891b2',
          text: '#1e293b',
          cardBg: 'rgba(255, 255, 255, 0.8)',
          border: 'rgba(147, 51, 234, 0.2)',
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
            'box-shadow': '0 0 20px rgba(168, 85, 247, 0.5)',
          },
          'to': {
            'box-shadow': '0 0 30px rgba(59, 130, 246, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
