import type { Config } from "tailwindcss";

function generatePixelObject(max: number) {
  return Array.from(Array(max)).reduce((acc, _, i) => {
    acc[i] = `${i}px`;
    return acc;
  }, {}) as Record<string, string>;
}

const px0_10 = generatePixelObject(11);
const px0_100 = generatePixelObject(101);
const px0_200 = generatePixelObject(201);
const px0_2000 = generatePixelObject(2001);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_200,
      lineHeight: px0_200,
      minWidth: px0_2000,
      minHeight: px0_2000,
      maxWidth: px0_2000,
      maxHeight: px0_2000,
      spacing: px0_200,
      borderRadius: px0_100,
      width: px0_2000,
      height: px0_2000,
      inset: px0_2000,
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "bg-default": "#f8f9fa",
        "bg-sand": "#fed777",
        "bg-sea": "#7ebefe",
        "bg-lightgreen": "#E1FDF4",
        "star-rating": "#f9390f",
        "text-title": "#1b1c1d",
        "text-sub": "#858a8d",
      },
      screens: {
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "576px" },
      },

      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        spring: "spring 0.3s ease-out forwards",
        fadeIn: "fadeIn 1s ease-out forwards",
        growUp: "growUp 1s ease-out forwards",
        wave: "wave 2s ease-in-out forwards", // 애니메이션 속도 조절
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        spring: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        growUp: {
          "0%": { maxHeight: "0%" },
          "100%": { maxHeight: "100%" },
        },
        wave: {
          "0%, 20%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-10px)" }, // 파도 효과
        },
      },
    },
  },
  plugins: [],
};
export default config;
