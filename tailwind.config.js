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
        // ── Brand palette derived from hero-banner-2 imagery ──────────
        // forest → warm chai brown (CTAs, nav, primary actions)
        forest: {
          50:  '#FDF5ED',
          100: '#F8E8D0',
          200: '#F0CBA4',
          300: '#E5A870',
          400: '#D48449',
          500: '#BC6426',
          600: '#9E5020',
          700: '#7E3D18',
          800: '#5F2D12',
          900: '#3F1E0C',
          950: '#200F06',
        },
        // saffron → turmeric gold (badges, prices, highlights)
        saffron: {
          50:  '#FEFBF0',
          100: '#FDF3CE',
          200: '#FAE39C',
          300: '#F5CD60',
          400: '#EDAF28',
          500: '#D9920E',
          600: '#BC7610',
          700: '#965C0E',
          800: '#72440B',
          900: '#512F08',
        },
        // spice → kumkum terracotta (sale, urgent, accent)
        spice: {
          50:  '#FBF2EE',
          100: '#F5E1D8',
          200: '#EAB5A4',
          300: '#DC8568',
          400: '#CC5D43',
          500: '#B54030',
          600: '#953222',
          700: '#70241A',
          800: '#4C1812',
          900: '#2B0E0A',
        },
        // warm → exact banner cream (backgrounds, cards, sections)
        warm: {
          50:  '#FDFAF4',
          100: '#F7EEE1',
          200: '#EDD9C4',
          300: '#E1C2A4',
          400: '#D2A882',
          500: '#C28D60',
          600: '#AB7247',
          700: '#8A5634',
          800: '#673F24',
          900: '#452919',
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
