const plugin = require("tailwindcss/plugin");
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      bgGradientDeg: {
        75: "75deg",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: Config) {
      matchUtilities({
        "bg-gradient": (angle: number) => ({
          "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
        }),
      });
    }),
    require("tailwindcss-hero-patterns"),
  ],
} satisfies Config;
