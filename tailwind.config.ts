import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tech-stack-bg": "url('https://i.ibb.co.com/9bBMgsX/Background.png')",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "zoom-in-out": "zoomInOut 5s ease-in-out infinite",
        "spin-then-straight": "spinThenStraight 8s ease-in-out infinite",
      },
      keyframes: {
        zoomInOut: {
          "0%": { transform: "scale(1)", easing: "ease-in-out" },
          "50%": { transform: "scale(1.1)", easing: "ease-in-out" },
          "100%": { transform: "scale(1)", easing: "ease-in-out" },
        },
        spinThenStraight: {
          "0%": {
            transform: "rotate(0deg)",
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          },
          "25%": {
            transform: "rotate(90deg)",
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
