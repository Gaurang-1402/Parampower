module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      width: {
        128: "30rem",
        150: "40rem",
      },
      height: {
        128: "30rem",
        150: "40rem",
      },
      colors: {
        primary: "#DECAF1",
        secondary: "#9259C4",
        quarternary: "#8327D2",
        tertiary: "#924AD2",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
      variants: {
        extend: {
          backgroundColor: ["checked"],
          borderColor: ["checked"],
          inset: ["checked"],
          zIndex: ["hover", "active"],
        },
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
      },
    },
  },
  plugins: [],
}
