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
        // ── Clean Emerald Green brand palette ──────────────────────────
        // forest → clean emerald green (CTAs, nav, primary actions)
        forest: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // saffron → warm amber (badges, prices, highlights)
        saffron: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // spice → clean red (sale, urgent, accent)
        spice: {
          50:  '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // warm → clean stone/white (backgrounds, cards, sections)
        warm: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
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
