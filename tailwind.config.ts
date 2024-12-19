import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        //мои переменные
        White: "#fff",
        Accent: "#9147FF",
        Main: "#0E0E10",
        Modal: "#18181B",
        Gray: "#9B9B9B",
        Panel: "#1F1F23",
        Red: "#F11010",
        Border: "#3B3B3B",
        //
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        fade: {
            from: { opacity: '0' },
            to: { opacity: '1' }
        },
        scaleIn: {
          '0%':{
            opacity:'0',
            transform: 'scale(0.9)'
          },
          '50%':{
            opacity:'0.3'
          },
          '100%':{
            opacity:'1',
            transform: 'scale(1)'
          },
        }
    },
    // fontFamily: {
    //   sans:['var(--font-geist-sans)'],
    //   mono:['var(--font-geist-mono)'],
    // },
    animation:{
      fade:'fade .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out'
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
