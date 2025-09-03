/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

       fontFamily: {
  goldman: ['Roboto'], // 'Goldman' Google Fonts से
},
      keyframes: {
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },

 'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },

      marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

      },
      animation: {
        'gradient-move': 'gradient-move 3s linear infinite',
            'fade-in': 'fade-in 10.5s ease-out forwards',
                    marquee: 'marquee 5s linear infinite',


      },
      backgroundSize: {
        '200': '200% 200%',
      },





  
  // animation: {
  //   'fade-in': 'fade-in 9.5s ease-out forwards',
  // },







      colors: {
        olive: "#556B2F",
        beige: "#F5F5DC",
        brown: "#8B4513",
        gold:"#ffd700" 
      },


   
   
  },
},
  plugins: [],
}
