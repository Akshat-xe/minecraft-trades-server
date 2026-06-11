/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#061410',
          900: '#0A1F1A',
          800: '#133830',
          700: '#1A4238',
          600: '#1E463E',
          500: '#2B5C52',
          400: '#3D7A6F',
          300: '#5A9E92',
        },
        mint: {
          50:  '#F8FAFA',
          100: '#F0F5F3',
          200: '#DCE4E0',
          300: '#C8D4CF',
        },
        'mc-diamond': '#5DE7EF',
        'mc-iron':    '#D8D8D8',
        'mc-gold':    '#FADB57',
        'mc-emerald': '#17DD62',
        'mc-netherite':'#443C3C',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        pixel:   ['"Press Start 2P"', 'cursive'],
        body:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        pill:  '9999px',
      },
      boxShadow: {
        float:        '0 10px 30px rgba(0,0,0,0.18)',
        'float-lg':   '0 20px 60px rgba(0,0,0,0.28)',
        'glow-d':     '0 0 20px rgba(93,231,239,0.45)',
        'glow-e':     '0 0 20px rgba(23,221,98,0.45)',
        'glow-g':     '0 0 20px rgba(250,219,87,0.45)',
      },
      animation: {
        float:      'float 3.5s ease-in-out infinite',
        'float-r':  'float-r 4s ease-in-out infinite',
        shimmer:    'shimmer 3s linear infinite',
        enchant:    'enchant 2s ease-in-out infinite',
        particleA:  'particle-fall 6s linear infinite',
        particleB:  'particle-fall 8s linear infinite',
        particleC:  'particle-fall 5s linear infinite',
        glowPulse:  'glow-pulse 2s ease-in-out infinite',
        revealUp:   'reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        slideIn:    'slide-in 0.6s cubic-bezier(0.16,1,0.3,1) both',
        fadeIn:     'fade-in 0.5s ease both',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        'float-r': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(8deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        enchant: {
          '0%,100%': { filter: 'brightness(1) saturate(1)' },
          '50%':     { filter: 'brightness(1.4) saturate(1.6) hue-rotate(20deg)' },
        },
        'particle-fall': {
          '0%':   { transform: 'translateY(-30px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(105vh) rotate(720deg)', opacity: '0' },
        },
        'glow-pulse': {
          '0%,100%': { textShadow: '0 0 20px rgba(23,221,98,0.7), 0 0 40px rgba(23,221,98,0.4)' },
          '50%':     { textShadow: '0 0 40px rgba(23,221,98,1), 0 0 80px rgba(23,221,98,0.7), 0 0 120px rgba(23,221,98,0.3)' },
        },
        'reveal-up': {
          '0%':   { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        'slide-in': {
          '0%':   { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
