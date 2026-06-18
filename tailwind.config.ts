import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Every color resolves to a CSS variable defined in app/globals.css,
        // stored there as "R G B" channel triples. Wrapping them here in
        // rgb(var(...) / <alpha-value>) is what makes Tailwind's opacity
        // modifiers work — e.g. text-paper/80, border-line/40, bg-ink/60.
        // Swap the variable values in globals.css and the whole site updates.
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-raised": "rgb(var(--color-paper-raised) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        steel: "rgb(var(--color-steel) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        signal: "rgb(var(--color-signal) / <alpha-value>)",
        "signal-soft": "rgb(var(--color-signal-soft) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        site: "1280px",
      },
      letterSpacing: {
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
