/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(500%)' },
          '10%': { transform: 'translateY(-20%)' },
          '15%': { transform: 'translateY(0%)' },
          '80%': { opacity: '100', transform: 'scale(100%)' },
          '100%': { opacity: '0', transform: 'scale(120%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 3s ease-in-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
