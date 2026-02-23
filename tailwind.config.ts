import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          900: "#0B1120",
          800: "#111827",
        },
        electric: {
          blue: "#00D4FF",
          secondary: "#008CFF",
        },
        glass: {
          dark: "rgba(255,255,255,0.04)",
          light: "rgba(0,0,0,0.04)",
          borderDark: "rgba(255,255,255,0.12)",
          borderLight: "rgba(0,0,0,0.12)",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glow-gradient": "linear-gradient(135deg, rgba(0,212,255,0.5) 0%, rgba(0,140,255,0) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        'scale-sm': '8px',
        'scale-md': '16px',
        'scale-lg': '24px',
        'scale-xl': '32px',
      },
      boxShadow: {
        'neon': '0 0 10px rgba(0,212,255,0.4), 0 0 20px rgba(0,212,255,0.2)',
        'neon-strong': '0 0 15px rgba(0,212,255,0.6), 0 0 30px rgba(0,212,255,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'zoom 10s ease-out forwards',
        'reveal': 'reveal 0.45s cubic-bezier(0.2, 0.85, 0.2, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
