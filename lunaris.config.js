const tailwindColors = require('tailwindcss/colors');

// removes tailwind color warnings
delete tailwindColors['lightBlue'];
delete tailwindColors['warmGray'];
delete tailwindColors['trueGray'];
delete tailwindColors['coolGray'];
delete tailwindColors['blueGray'];

// LUNARIS CONFIGURATION
export const lunaris = {
  theme: {
    colors: {
      // ===MAIN THEME COLORS===
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
    ui: {
      // ===CONTAINERS===
      // border radius rounded-box utility class, used in card and other large boxes
      roundedBox: '1rem',

      // ===BUTTONS===
      // border radius rounded-btn utility class, used in buttons and similar element
      roundedBtn: '0.5rem',
      // duration of animation when you click on button
      animationBtn: '0.25s',
      // scale transform of button when you focus on it
      btnFocusScale: '0.95',
      // border width of buttons
      borderBtn: '1px',

      // ===INPUTS===
      // duration of animation for inputs like checkbox, toggle, radio, etc
      animationInput: '0.2s',

      // ===BADGES===
      // border radius rounded-badge utility class, used in badges and similar
      roundedBadge: '1.9rem',

      // ===TABS===
      // border width of tabs
      tabBorder: '1px',

      // border radius of tabs
      tabRadius: '0.5rem',

      // ===TOGGLE===
      // background color of toggle
      tglbg: tailwindColors.gray[200],

      // ===TOOLTIPS===
      // background color of tooltip
      tooltipColor: tailwindColors.gray[800],
      // text color of tooltip
      tooltipTextColor: tailwindColors.gray[100],

      // ===GLASS===
      // blur value of glass effect
      glassBlur: '5px',
      // opacity of glass effect
      glassOpacity: '25%',
      // opacity of glass border
      glassBorderOpacity: '15%',
      // degree of glass reflex
      glassReflexDegree: '45deg',
      // opacity of glass reflex
      glassReflexOpacity: '10',
      // opacity of text shadow
      glassTextShadowOpacity: '30',
    },
  },
};
