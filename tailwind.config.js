/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Material Design 3 color tokens used throughout the project
        primary: {
          DEFAULT: "#0B245E",
          50: "#EEF4FF",
          100: "#E0ECFF",
          200: "#C7DBFF",
          500: "#1A56DB",
          600: "#0B245E",
          700: "#081D4C",
          800: "#06163A",
          900: "#040F28",
          container: "#132D6E",
        },
        secondary: {
          DEFAULT: "#0062A0",
          50: "#F0F9FF",
          100: "#E0F2FE",
          400: "#38BDF8",
          500: "#0284C7",
          600: "#0062A0",
          fixed: "#C8E6FF",
        },
        tertiary: {
          DEFAULT: "#D97706",
          50: "#FFFBEB",
          fixed: "#FFD700",
        },
        background: "#F8FAFC",
        surface: {
          DEFAULT: "#FFFFFF",
          bright: "#F8FAFC",
          container: {
            DEFAULT: "#F1F5F9",
            low: "#F8FAFC",
            high: "#E2E8F0",
            lowest: "#FFFFFF",
            highest: "#CBD5E1",
          },
        },
        "on-surface": {
          DEFAULT: "#0F172A",
          variant: "#475569",
        },
        "on-primary": "#FFFFFF",
        "on-secondary-fixed": "#001D30",
        "on-background": "#0F172A",
        "outline-variant": "#E2E8F0",
        outline: "#94A3B8",
        error: "#DC2626",
        "surface-variant": "#F1F5F9",
      },
      boxShadow: {
        'soft-xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'soft-sm': '0 2px 4px 0 rgba(15, 23, 42, 0.05)',
        'soft-md': '0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'soft-lg': '0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.03)',
        'soft-xl': '0 20px 32px -6px rgba(15, 23, 42, 0.1), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow-primary': '0 0 30px -5px rgba(11, 36, 94, 0.35)',
        'glow-secondary': '0 0 30px -5px rgba(0, 98, 160, 0.35)',
      },
      fontFamily: {
        "body-md": ["Inter", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        "headline-sm": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "code-sm": ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
        serif: ["Newsreader", "Playfair Display", "Georgia", "serif"],
      },
      fontSize: {
        "label-caps": ["0.6875rem", { letterSpacing: "0.08em", fontWeight: "700" }],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};
