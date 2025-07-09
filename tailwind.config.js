module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          0: "#000000",
          10: "#2b0052",
          20: "#431b6a",
          25: "#4e2776",
          30: "#5a3483",
          35: "#67408f",
          40: "#734c9c",
          50: "#8d65b7",
          60: "#a87fd3",
          70: "#c499f0",
          80: "#dcb8ff",
          90: "#efdbff",
          95: "#f9ecff",
          98: "#fff7ff",
          99: "#fffbff",
          100: "#ffffff",
          DEFAULT: "#734c9c", // Optionally set a default shade
        },
        // ...add secondary, tertiary, etc. as needed
      },
      fontFamily: {
        sans: ['"Open Sans"', "Helvetica Neue", "Arial", "sans-serif"],
        // Optionally add more custom font families
        brand: ['"Open Sans"', "sans-serif"],
        plain: ['"Open Sans"', "sans-serif"],
      },
      fontWeight: {
        regular: "300",
        medium: "500",
        bold: "900",
      },
    },
  },
  plugins: [],
};
