/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mont': ["'Mont'",'sans-serif'],
      },
      fontSize: {
        "15r":"15rem",
        "5r": "5rem",
        "3/5r":"3.5rem",
        "3r": "3rem",
        "2/5r": "2.5rem",
        "2r":"2rem",
        "1/5r": "1.5rem", 
        "72s": "72px",
        "36s": "36px",
        "15s": "15px",
        "12s": "12px",
        "5s": "5px",
      },
      colors: {
        blue:"#5135ff",
        green: "#91f1c3",
        lightblack: "#686868",
        yellow: "#ffcb48",
      },

      padding: {
        "20r": "20rem",
        "10r": "10rem",
        "30s": "30px",
        "28s": "28px",
        "25s": "25px",
        "23s": "23px",
        "15s": "15px",
        "13s":"13px",
        "10s": "10px",
        "5s": "5px",
      },

      width: {
        fit: "fit-content",
        "38r":"38rem",
        "35r":"35rem",
        "33r":"33rem",
        "24/4r":"24.4rem",
        "23/5r":"23.5rem",
        "23r":"23rem",
        "22r":"22rem",
        "19/4r":"19.4rem",
        "18/5r":"18.5rem",
        "12r":"12rem",
        "10r": "10rem",
        "3r": "3rem",

        half: "50%",
      },
      height: {
        fit: "fit-content",
        "40r": "40rem",
        "30r": "30rem",
        "35r": "35rem",
        "30r": "30rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "7r": "7rem",
        "4r": "4rem",
      },
      borderRadius: {
        "1r": "2rem",
        "3s": "3px",
      },
      margin: {
        "40r": "40rem",
        "32r": "32rem",
        "20r": "20rem",
        "40s": "40px",
        "8r": "8rem",
        "6@":"0.6rem",
      },
      inset: {
        "140r": "140rem",
        "124r": "124rem",
      },
    },
  },
  plugins: [],
}
