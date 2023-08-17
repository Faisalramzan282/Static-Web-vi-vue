module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
    theme: {
        extend: {
          width: {
            '60': '60%',
            '25': '25%',
             
          },
          height :{
            '250': '250px'

          },
          colors:{
            'design-conf-speaker': '#42266f',
            'date-colour' : '#b1b1b1',
            'body-bg-col' : '#f8fafd',
            'cartScheduleBgCol' : '#eaf1f9'
          },
          borderRadius: {
            'cart-radius': '40px'
          }, 
          fontFamily: {
            'bodyFont' : ['Manrope', 'sans-serif'],
          },
        },
       
    },
    plugins: [],
}
