import plugin from "tailwindcss/plugin";

const customCss = require("./src/styles/custom-css.js");

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities(customCss);
    }),
  ],
};
export default config;
