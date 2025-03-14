import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-white-dark-100": "#060714",
        "on-white-grey-100": "#7780a1",
        "on-white-dark-90": "#262840",
        "rest-white": "#ffffff",
        "primary-purple-light-100": "#514CFF",
      },
      fontSize: {
        "custom-14": "14px",
        "custom-16": "16px",
        "custom-20": "20px",
      },
      fontWeight: {
        "custom-400": "400",
        "custom-600": "600",
      },
    },
  },
  plugins: [],
} satisfies Config;
