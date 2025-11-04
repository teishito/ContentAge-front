import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 🎨 カラー定義（ブランドガイド準拠）
      colors: {
        black: "#000000",  // テキスト
        gray1: "#B5B5B5",  // 線や背景
        gray2: "#E5E5E5",  // 背景やコンテンツ
        orange: "#F48B00", // 強調
        blue: "#004EFF",   // アクセント・リンク
      },
      // 🧵 フォント定義
      fontFamily: {
        sans: ["'Zen Kaku Gothic New'", "'Urbanist'", "sans-serif"],
      },
      // 💠 カードなどの影・角丸
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        lg: "0.75rem",
      },
      // 🌀 背景グラデーション（既存を保持）
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
