/** @type {import('tailwindcss').Config} */

const tailwindColors = require('tailwindcss/colors');

// removes tailwind color warnings
delete tailwindColors['lightBlue'];
delete tailwindColors['warmGray'];
delete tailwindColors['trueGray'];
delete tailwindColors['coolGray'];
delete tailwindColors['blueGray'];

// import {lunaris} from './lunaris.config';
// const colors = lunaris.theme.colors;
// console.log;
// const ui = lunaris.theme.ui;

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...tailwindColors,
      primary: tailwindColors.indigo[700],
      primaryContent: tailwindColors.indigo[200],
      primaryFocus: tailwindColors.indigo[800],
      secondary: tailwindColors.pink[500],
      secondaryContent: tailwindColors.pink[200],
      secondaryFocus: tailwindColors.pink[600],
      accent: tailwindColors.teal[400],
      accentContent: tailwindColors.teal[900],
      accentFocus: tailwindColors.teal[500],
      neutral: tailwindColors.gray[700],
      neutralContent: tailwindColors.gray[800],
      neutralFocus: tailwindColors.gray[50],
      base100: tailwindColors.gray[100],
      base200: tailwindColors.gray[200],
      base300: tailwindColors.gray[300],
      baseContent: tailwindColors.gray[800],

      // ===OTHER COLORS===
      info: tailwindColors.cyan[500],
      infoContent: tailwindColors.cyan[900],
      success: tailwindColors.green[400],
      successContent: tailwindColors.green[900],
      warning: tailwindColors.yellow[500],
      warningContent: tailwindColors.yellow[900],
      error: tailwindColors.red[400],
      errorContent: tailwindColors.red[900],
      danger: tailwindColors.red[400],
      dangerContent: tailwindColors.red[900],
    },
  },
  daisyui: {
    utils: true,
    themes: [
      {
        default: {
          // Note: default `text-base-content` added to <html> element in Document.tsx. Change it there if you want to change the default text color.

          // main theme colors
          //   primary: tailwindColors.primary,
          //   'primary-content': tailwindColors.primaryContent,
          //   'primary-focus': tailwindColors.primaryFocus,
          //   secondary: tailwindColors.secondary,
          //   'secondary-content': tailwindColors.secondaryContent,
          //   'secondary-focus': tailwindColors.secondaryFocus,
          //   accent: tailwindColors.accent,
          //   'accent-content': tailwindColors.accentContent,
          //   'accent-focus': tailwindColors.accentFocus,
          //   neutral: tailwindColors.neutral,
          //   'neutral-content': tailwindColors.neutralContent,
          //   'neutral-focus': tailwindColors.neutralFocus,
          //   'base-100': tailwindColors.base100,
          //   'base-200': tailwindColors.base200,
          //   'base-300': tailwindColors.base300,
          //   'base-content': tailwindColors.baseContent,

          //   // other tailwindColors
          //   info: tailwindColors.info,
          //   'info-content': tailwindColors.infoContent,
          //   success: tailwindColors.success,
          //   'success-content': tailwindColors.successContent,
          //   warning: tailwindColors.warning,
          //   'warning-content': tailwindColors.warningContent,
          //   error: tailwindColors.error,
          //   'error-content': tailwindColors.errorContent,
          //   danger: tailwindColors.danger,
          //   'danger-content': tailwindColors.dangerContent,

          // containers
          '--rounded-box': '1rem',

          // buttons
          '--rounded-btn': '0.5rem',
          '--border-btn': '1px',
          '--animation-btn': '0.25s',
          '--btn-focus-scale': '0.95',

          // inputs
          '--animation-input': '0.2s',

          // tabs
          '--tab-border': '1px',
          '--tab-radius': '0.5rem',

          // badges
          '--rounded-badge': '1.9rem',

          // toggle
          '--tglbg': tailwindColors.gray[200],

          // tooltips
          '--tooltip-color': tailwindColors.gray[800],
          '--tooltip-text-color': tailwindColors.gray[100],

          // glass
          '--glass-blur': '5px',
          '--glass-opacity': '25%',
          '--glass-border-opacity': '15%',
          '--glass-reflex-degree': '45deg',
          '--glass-reflex-opacity': '10',
          '--glass-text-shadow-opacity': '30',
          '--content-max-width': '100vw',
        },
      },
    ],
  },
  // moves the daisyUI plugin to the end of the list as per the Dasiy UI docs here:
  // https://daisyui.com/docs/layout-and-typography/
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
