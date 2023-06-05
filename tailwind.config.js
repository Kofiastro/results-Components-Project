/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily:{
        Hanken: ('Hanken Grotesk', 'sans-serif'),
      },
      colors:{
        LightRed: 'hsl(0, 100%, 67%)',
        OrangeYellow: 'hsl(39, 100%, 56%)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        CobaltBlue: 'hsl(234, 85%, 45%)',
        Lightslateblue_Bckgrnd: 'hsl(252, 100%, 67%)',
        Lightroyalblue_Bckgrnd: 'hsl(241, 81%, 54%)',
        Violetblue_Circle: 'hsla(256, 72%, 46%, 1)',
        PersianBlue_Circle: 'hsla(241, 72%, 46%, 0)',
        White: 'hsl(0, 0%, 100%)',
        PaleBlue: 'hsl(221, 100%, 96%)',
        LightLavender: 'hsl(241, 100%, 89%)',
        DarkgrayBlue: 'hsl(224, 30%, 27%)',
      }
    },
  },
  plugins: [],
}

