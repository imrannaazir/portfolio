module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",
          secondary: "#F6BC2D",
          accent: "#0B2B40",
          neutral: "#ECB365",
          "base-100": "#041C32",
          "base-200": "#04293A",
          "base-300": "#064663",
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