import type { Config } from 'tailwindcss'

const config: Config = {
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
      fontFamily:{
        'bebas': ['Bebas Neue', 'sans-serif'],
        'bungee': ['Bungee Spice', 'sans-serif'],
        'lilita': ['Lilita One', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'overlock': ['Overlock SC', 'sans-serif'],
        'p-marker': ['Permanent Marker', 'cursive'],
        'rubik': ['Rubik Doodle Shadow', 'system-ui'],
        'russo': ['Russo One', 'sans-serif'],
        'tektur': ['Tektur', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
