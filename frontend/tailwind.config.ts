import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    }, 
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primaryDark: '#0094D9',
        primaryWhite: '',
        cardDark: '#414C50',
        buttonPrimary: '#0094D9',
        secondaryDark: '',
        secondaryWhite: '',
        hoverColorDark: '#EEF3FB',
        hoverColorWhite: '',
        bgColorDark: '#2D383C',
        bgColorWhite: '',
        newPrimaryDark: "#242424", 
        stepsMarkerBlue: "#3267E6",  
        stepMarkNotSelected: "#9195F6", 
        disabledNextButton: "#162E66", 
        normalInputBg: "#323232", 
        stepPassedBg: "#F7F9FF", 
        keepEditingBtnBg: "#600E18", 
        activeTextColor: "#6DE2A6", 
        activeBgColor: "#05522B", 
        pendingBgcolor: "#662314", 
        pendingTextColor: "#FF9A85", 
        optionContainerBg: "#1C1C1C", 
        deemGray: "#BABABA",
        settingViewBottomBorderColor: "#3772FF"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'articulat': ['articulat'], 
    }
  },
  plugins: [
    require("tailwindcss-animate"), 
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: '#0096D9',
          },
        },
        dark: {
          // ...
          colors: {
            primary: '#0096D9',
          },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
