// C:\Users\user\radio-website\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a', // Dark background
        accent: '#d4af37', // Gold accent
        secondary: '#333333', // Darker gray
        widget: '#2a2a2a', // Widget background
        neon: '#00ffcc', // Neon cyan
        neonGlow: '#00ffcc80', // Neon glow
        neonBlue: '#00b7eb', // Neon blue
        neonMagenta: '#ff007a', // Neon magenta
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-neon': 'pulseNeon 1.2s ease-in-out infinite',
        'glow-neon': 'glowNeon 1.5s ease-in-out infinite',
        'flicker-neon': 'flickerNeon 3s ease-in-out infinite',
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
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 8px #00ffcc, 0 0 16px #00ffcc, 0 0 24px #ff007a' },
          '50%': { boxShadow: '0 0 12px #00ffcc, 0 0 24px #00ffcc, 0 0 32px #ff007a' },
        },
        glowNeon: {
          '0%, 100%': { textShadow: '0 0 8px #00ffcc, 0 0 16px #00ffcc, 0 0 24px #ff007a' },
          '50%': { textShadow: '0 0 12px #00ffcc, 0 0 24px #00ffcc, 0 0 32px #ff007a' },
        },
        flickerNeon: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1', textShadow: '0 0 8px #00ffcc, 0 0 16px #00ffcc' },
          '20%, 24%, 55%': { opacity: '0.8', textShadow: '0 0 4px #00ffcc' },
        },
      },
    },
  },
  plugins: [],
}