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

        dropShadow: {
          "3xl": "0px 35px 35px rgba(0, 0, 0, 0.45)",
        },

        screens: {
          sm: "500px",
        },
        colors: {
          correct: "#20AA57",
          exist: "#E5B22D",
          wrong: "#989898",
        },

        transitionDelay: {
          0: "0ms",
          100: "100ms",
          200: "200ms",
          300: "300ms",
          400: "400ms",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [],
}
