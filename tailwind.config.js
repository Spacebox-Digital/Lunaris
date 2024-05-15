/** @type {import('tailwindcss').Config} */

// default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '30rem', // 480px
      sm: '40rem', // 640px
      md: '48rem', // 768px
      lg: '64rem', // 1024px
      xl: '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },
    fontSize: {
      '2xs': ['0.625rem', {lineHeight: '1rem'}], // 10px
      xs: ['0.75rem', {lineHeight: '1rem'}], // 12px
      sm: ['0.875rem', {lineHeight: '1.25rem'}], // 14px
      base: ['1rem', {lineHeight: '1.5rem'}], // 16px
      lg: ['1.125rem', {lineHeight: '1.75rem'}], // 18px
      xl: ['1.25rem', {lineHeight: '1.75rem'}], // 20px
      '2xl': ['1.5rem', {lineHeight: '2rem'}], // 24px
      '3xl': ['1.875rem', {lineHeight: '2.25rem'}], // 30px
      '4xl': ['2.25rem', {lineHeight: '2.5rem'}], // 36px
      '5xl': ['3rem', {lineHeight: '1.25'}], // 48px
      '6xl': ['3.75rem', {lineHeight: '1.25'}], // 60px
      '7xl': ['4.5rem', {lineHeight: '1.25'}], // 72px
      '8xl': ['6rem', {lineHeight: '1.25'}], // 96px
      '9xl': ['8rem', {lineHeight: '1.25'}], // 128px
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        black: 'var(--black)',
        offBlack: 'var(--off-black)',
        darkGray: 'var(--dark-gray)',
        mediumDarkGray: 'var(--medium-dark-gray)',
        mediumGray: 'var(--medium-gray)',
        gray: 'var(--gray)',
        lightGray: 'var(--light-gray)',
        offWhite: 'var(--off-white)',
        white: 'var(--white)',
        text: 'var(--text)',
        background: 'var(--background)',
        border: 'var(--border)',
      },
      animation: {
        'spin-fast': 'spin 0.75s linear infinite',
        'bounce-high': 'bounce-high 0.75s infinite',
        flash: 'flash 1.5s infinite',
      },
      keyframes: {
        'bounce-high': {
          '0%, 100%': {
            transform: 'translateY(-50%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        flash: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.1,
          },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        prefix: 'lui',
        default: {
          // T-423 Bring these colors into the design system to be accounted for
          // T-424 #lunaris - update these colors to match the design system
          // main theme colors
          "primary": "#a991f7",
          "primary-content": "#000816",
          "secondary": "#f6d860",
          "secondary-content": "#060a00",
          "accent": "#37cdbe",
          "accent-content": "#e8dbcf",
          "neutral": "#3d4451",
          "neutral-content": "#cdc9c6",
          "base-100": "#ffffff",
          "base-200": "#cbdede",
          "base-300": "#adbebe",
          "base-content": "#131616",

          // other colors
          "info": "#00e5ff",
          "info-content": "#001216",
          "success": "#1dff1a",
          "success-content": "#001600",
          "warning": "#db8800",
          "warning-content": "#110600",
          "error": "#ff506c",
          "error-content": "#160204",

          // component modifiers
          "--rounded-box": "1rem",          // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem",        // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem",      // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s",       // duration of animation when you click on button
          "--animation-input": "0.2s",      // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95",      // scale transform of button when you focus on it
          "--border-btn": "1px",            // border width of buttons
          "--tab-border": "1px",            // border width of tabs
          "--tab-radius": "0.5rem",         // border radius of tabs
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')
  ],
};
