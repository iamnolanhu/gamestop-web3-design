/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        gray: {
          900: '#0F1218',
          800: '#161B25',
          700: '#1F2937',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
        },
        red: {
          900: '#7F1D1D',
          800: '#991B1B',
          700: '#B91C1C',
          600: '#DC2626',
          500: '#EF4444',
          400: '#F87171',
        },
        blue: {
          900: '#1E3A8A',
          800: '#1E40AF',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        purple: {
          900: '#581C87',
          800: '#6B21A8',
          700: '#7E22CE',
          600: '#9333EA',
          500: '#A855F7',
          400: '#C084FC',
        },
      },
      boxShadow: {
        'game-card': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};