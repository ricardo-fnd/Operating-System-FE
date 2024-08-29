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
    plugin(function ({ addUtilities }) {
      addUtilities(customCss);
    }),
  ],
};
export default config;
