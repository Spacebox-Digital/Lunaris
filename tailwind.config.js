/** @type {import('tailwindcss').Config} */

import { lunaris } from './lunaris.config';
const colors = lunaris.theme.colors;
const ui = lunaris.theme.ui;

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // I think these could be removed and we can use tw defaults TBH
    screens: {
      xs: '30rem', // 480px
      sm: '40rem', // 640px
      md: '48rem', // 768px
      lg: '64rem', // 1024px
      xl: '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },
    fontSize: {
      // These should be set to our defaults or removed entirely IMO
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
      // Fonts not set by default. We know you're gonna change em... so why bother?
      // fontFamily: {},

      // T-428 #lunaris Remove old Pack colors once all section references are updated to use DaisUI colors
      // colors: {
      //   primary: 'var(--primary)',
      //   secondary: 'var(--secondary)',
      //   accent1: 'var(--accent1)',
      //   accent2: 'var(--accent2)',
      //   black: 'var(--black)',
      //   offBlack: 'var(--off-black)',
      //   darkGray: 'var(--dark-gray)',
      //   mediumDarkGray: 'var(--medium-dark-gray)',
      //   mediumGray: 'var(--medium-gray)',
      //   gray: 'var(--gray)',
      //   lightGray: 'var(--light-gray)',
      //   offWhite: 'var(--off-white)',
      //   white: 'var(--white)',
      //   text: 'var(--text)',
      //   background: 'var(--background)',
      //   border: 'var(--border)',
      // },
      // I think I'd prefer to get rid of all of these, see end comment
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
      //removal end here... thoughts?
    },
  },
  daisyui: {
    utils: true,
    themes: [
      {
        default: {
          // IMPORTANT: Update these values in the lunaris.config.js file

          // main theme colors
          "primary": colors.primary,
          "primary-content": colors.primaryContent,
          "secondary": colors.secondary,
          "secondary-content": colors.secondaryContent,
          "accent": colors.accent,
          "accent-content": colors.accentContent,
          "neutral": colors.neutral,
          "neutral-content": colors.neutralContent,
          "base-100": colors.base100,
          "base-200": colors.base200,
          "base-300": colors.base300,
          "base-content": colors.baseContent,

          // other colors
          "info": colors.info,
          "info-content": colors.infoContent,
          "success": colors.success,
          "success-content": colors.successContent,
          "warning": colors.warning,
          "warning-content": colors.warningContent,
          "error": colors.error,
          "error-content": colors.errorContent,

          // containers
          "--rounded-box": ui.roundedBox,

          // buttons
          "--rounded-btn": ui.roundedBtn,
          "--border-btn": ui.borderBtn,
          "--animation-btn": ui.animationBtn,
          "--btn-focus-scale": ui.btnFocusScale,

          // inputs
          "--animation-input": ui.animationInput,

          // tabs
          "--tab-border": ui.tabBorder,
          "--tab-radius": ui.tabRadius,
          "--tab-border": ui.tabBorder,

          // badges
          "--rounded-badge": ui.roundedBadge,

          // toggle
          "--tglbg": ui.tglbg,

          // tooltips
          "--tooltip-color": ui.tooltipColor,
          "--tooltip-text-color": ui.tooltipTextColor,

          // glass
          "--glass-blur": ui.glassBlur,
          "--glass-opacity": ui.glassOpacity,
          "--glass-border-opacity": ui.glassBorderOpacity,
          "--glass-reflex-degree": ui.glassReflexDegree,
          "--glass-reflex-opacity": ui.glassReflexOpacity,
          "--glass-text-shadow-opacity": ui.glassTextShadowOpacity,
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography')
  ],
};
