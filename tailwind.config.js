/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Dynamic color classes used in data arrays
    { pattern: /^bg-(forest|saffron|spice|warm)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^text-(forest|saffron|spice|warm)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^border-(forest|saffron|spice|warm)-(50|100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^ring-(forest|saffron|spice|warm)-(50|100|200|300|400|500|600|700|800|900)$/ },
    // Badge and status colors
    'bg-forest-700', 'bg-saffron-500', 'bg-spice-500', 'bg-forest-500',
    'text-forest-700', 'text-saffron-500', 'text-spice-500', 'text-forest-500',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#EDF4EF',
          100: '#D3E8DA',
          200: '#A8D1B5',
          300: '#72B58D',
          400: '#3D9666',
          500: '#1B6B43',
          600: '#155534',
          700: '#0F3F25',
          800: '#0A2A18',
          900: '#05160D',
          950: '#021008',
        },
        saffron: {
          50:  '#FEF6EE',
          100: '#FDE9D4',
          200: '#FAD0A4',
          300: '#F7B26E',
          400: '#F29040',
          500: '#E07C39',
          600: '#C4622A',
          700: '#9E4A1E',
          800: '#7A3516',
          900: '#58240E',
        },
        spice: {
          50:  '#FAF3F0',
          100: '#F5E5DE',
          200: '#EABCAD',
          300: '#DB8F7B',
          400: '#CB6451',
          500: '#B5422C',
          600: '#943221',
          700: '#6F2418',
          800: '#4C180F',
          900: '#2A0D08',
        },
        warm: {
          50:  '#FAF8F4',
          100: '#F5F0E8',
          200: '#EDE5D6',
          300: '#E2D8C8',
          400: '#D4C9B4',
          500: '#C4B89D',
          600: '#AFA085',
          700: '#8E7F65',
          800: '#6B5F4A',
          900: '#4A4133',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-pause': 'marquee 30s linear infinite paused',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'card':  '0 2px 12px 0 rgba(0,0,0,0.06), 0 1px 3px 0 rgba(0,0,0,0.04)',
        'card-hover': '0 8px 30px 0 rgba(0,0,0,0.10), 0 2px 8px 0 rgba(0,0,0,0.06)',
        'product': '0 4px 20px 0 rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}
