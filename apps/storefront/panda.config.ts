import { defineConfig } from "@pandacss/dev";
import preset from "@repo/ui/preset";

export default defineConfig({

	// strictTokens Ref: https://panda-css.com/docs/concepts/writing-styles#stricttokens
	// strictTokens: true, // only use token values in your styles. This prevents the use of custom or raw CSS values. 

	// EXISTING CONFIG BELOW

  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: ["@pandacss/dev/presets", preset],

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: {
    extend: {
      html: {
        fontFamily: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        WebkitTextSizeAdjust: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        WebkitTapHighlightColor: "transparent",
        lineHeight: "1.5",
        tabSize: "4",
      },
      body: {
        margin: "0",
      },
    },
  },

  importMap: "@repo/styled-system",

  // The output directory for your css system
  outdir: "../../packages/styled-system",
});
