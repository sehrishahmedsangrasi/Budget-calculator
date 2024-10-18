/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customGray: '#455A64', 
      customWhite: '#FFFFFFB2',
      customgreen: '#D9E7E5',
      customdrkgreen:'#42887C',
      customTextGray:'#686868',
      customDullLavender:'#E6E2E6',
      customPurple:'#836F81',
      customYellow:'#FFC727',
      customBgGray:'#F9F9F9',
      customRed:'#B05A5A',
      customDullRed:'#FFEAEA',
      customGrassGreen:"#5AB064",
      customLightGreen:"#ECFFEA"

    },fontSize: {
      'custom-12px': '12px',
    },},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

