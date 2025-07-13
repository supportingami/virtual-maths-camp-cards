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

        secondary: {
          0: "#000000",
          10: "#331c00",
          20: "#4d2a00",
          25: "#5a3200",
          30: "#683a00",
          35: "#754300",
          40: "#835000",
          50: "#cf8219", // Base color
          60: "#dfa13e",
          70: "#eec366",
          80: "#f7ddb0",
          90: "#fcefd7",
          95: "#fdf6ea",
          98: "#fffaf3",
          99: "#fffcf8",
          100: "#ffffff",
          DEFAULT: "#cf8219",
        },
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
