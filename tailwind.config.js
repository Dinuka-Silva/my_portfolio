/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        'background':   'var(--background)',
        'bg-hero':      'var(--bg-hero)',
        'bg-section':   'var(--bg-section)',
        'bg-deep':      'var(--bg-deep)',
        'surface':      'var(--surface)',
        /* Blue spectrum */
        'navy':         'var(--navy)',
        'sapphire':     'var(--sapphire)',
        'primary':      'var(--primary)',
        'royal':        'var(--royal)',
        'electric':     'var(--electric)',
        'sky-blue':     'var(--sky)',
        'cornflower':   'var(--cornflower)',
        'powder':       'var(--powder)',
        'ice':          'var(--ice)',
        'frost':        'var(--frost)',
        'mist':         'var(--mist)',
        /* Text */
        'text':         'var(--text)',
        'text-dim':     'var(--text-dim)',
        'text-subtle':  'var(--text-subtle)',
        'text-on-dark': 'var(--text-on-dark)',
        /* Borders */
        'border-color': 'var(--border)',
        'border-light': 'var(--border-light)',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'blink':      'blink 1s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      boxShadow: {
        'blue-sm':  '0 2px 8px rgba(37,99,235,0.08)',
        'blue-md':  '0 4px 24px rgba(37,99,235,0.12)',
        'blue-lg':  '0 8px 40px rgba(37,99,235,0.18)',
        'sky-md':   '0 4px 24px rgba(14,165,233,0.15)',
        'navy-md':  '0 4px 24px rgba(30,58,138,0.15)',
      },
    },
  },
  plugins: [],
}
