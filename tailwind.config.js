/** @type {import('tailwindcss').Config} */

const tailwindColors = require('tailwindcss/colors');

// removes tailwind color warnings
delete tailwindColors['lightBlue'];
delete tailwindColors['warmGray'];
delete tailwindColors['trueGray'];
delete tailwindColors['coolGray'];
delete tailwindColors['blueGray'];

import {lunaris} from './lunaris.config';
const colors = lunaris.theme.colors;
console.log;
const ui = lunaris.theme.ui;

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...tailwindColors,
    },
  },
  daisyui: {
    utils: true,
    themes: [
      {
        default: {
          // Note: default `text-base-content` added to <html> element in Document.tsx. Change it there if you want to change the default text color.

          // main theme colors
          primary: colors.primary,
          'primary-content': colors.primaryContent,
          'primary-focus': colors.primaryFocus,
          secondary: colors.secondary,
          'secondary-content': colors.secondaryContent,
          'secondary-focus': colors.secondaryFocus,
          accent: colors.accent,
          'accent-content': colors.accentContent,
          'accent-focus': colors.accentFocus,
          neutral: colors.neutral,
          'neutral-content': colors.neutralContent,
          'neutral-focus': colors.neutralFocus,
          'base-100': colors.base100,
          'base-200': colors.base200,
          'base-300': colors.base300,
          'base-content': colors.baseContent,

          // other colors
          info: colors.info,
          'info-content': colors.infoContent,
          success: colors.success,
          'success-content': colors.successContent,
          warning: colors.warning,
          'warning-content': colors.warningContent,
          error: colors.error,
          'error-content': colors.errorContent,
          danger: colors.danger,
          'danger-content': colors.dangerContent,

          // containers
          '--rounded-box': ui.roundedBox,

          // buttons
          '--rounded-btn': ui.roundedBtn,
          '--border-btn': ui.borderBtn,
          '--animation-btn': ui.animationBtn,
          '--btn-focus-scale': ui.btnFocusScale,

          // inputs
          '--animation-input': ui.animationInput,

          // tabs
          '--tab-border': ui.tabBorder,
          '--tab-radius': ui.tabRadius,
          '--tab-border': ui.tabBorder,

          // badges
          '--rounded-badge': ui.roundedBadge,

          // toggle
          '--tglbg': ui.tglbg,

          // tooltips
          '--tooltip-color': ui.tooltipColor,
          '--tooltip-text-color': ui.tooltipTextColor,

          // glass
          '--glass-blur': ui.glassBlur,
          '--glass-opacity': ui.glassOpacity,
          '--glass-border-opacity': ui.glassBorderOpacity,
          '--glass-reflex-degree': ui.glassReflexDegree,
          '--glass-reflex-opacity': ui.glassReflexOpacity,
          '--glass-text-shadow-opacity': ui.glassTextShadowOpacity,
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
