import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './content/**/*.md',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1440px' },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      fontFamily: {
        // SF Pro Text for body/UI — resolves to real SF Pro on Apple, Inter elsewhere
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Inter', ...fontFamily.sans],
        // SF Pro Display for headlines — -apple-system picks display variant at large sizes
        display: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', ...fontFamily.sans],
        mono: ['DM Mono', ...fontFamily.mono],
      },
      letterSpacing: {
        'apple-display': '-0.028em',   // hero-display tight
        'apple-head': '-0.011em',      // display-lg / display-md
        'apple-body': '-0.022em',      // body text
        'apple-caption': '-0.016em',   // caption / button-utility
      },
      borderRadius: {
        lg: 'var(--radius)',           // 18px — store utility cards
        md: 'calc(var(--radius) - 7px)', // 11px — pearl button capsules
        sm: 'calc(var(--radius) - 10px)', // 8px — dark utility buttons
        pill: '9999px',               // primary blue CTAs
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
