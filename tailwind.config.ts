import plugin from "tailwindcss/plugin";

const customCss = require("./src/styles/custom-css.js");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{jsx,tsx}",
    "./src/app/**/*.{jsx,tsx}",
    "./src/shared/components/**/*.{jsx,tsx}",
  ],
  plugins: [
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities(customCss);
      addVariant("first", "& > :first-child");
      addVariant("last", "& > :last-child");
    }),
  ],
};
export default config;
