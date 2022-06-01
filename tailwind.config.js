module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#30A5BF",
          secondary: "#185359",
          accent: "#0B2B40",
          neutral: "#A6874E",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
};