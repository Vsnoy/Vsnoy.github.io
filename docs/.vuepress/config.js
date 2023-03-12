const { searchPlugin } = require("@vuepress/plugin-search");
const { clipboardPlugin } = require("vuepress-plugin-clipboard");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
const {
  cursorEffects: cursorEffectsPlugin,
} = require("@anyfork/vuepress-plugin-cursor-effects-next");
const { rightAnchorPlugin } = require("vuepress-plugin-right-anchor");

const { defaultTheme } = require("@vuepress/theme-default");

const navbar = require("./navbar");
const sidebar = require("./sidebar");

module.exports = {
  title: "Trauma",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/header.png",
      },
    ],
  ],
  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  plugins: [
    searchPlugin(),
    clipboardPlugin({}),
    backToTopPlugin(),
    mdEnhancePlugin({
      footnote: true,
      sub: true,
      sup: true,
    }),
    cursorEffectsPlugin({
      size: 2,
      shape: "star",
      zIndex: 999999999,
    }),
    rightAnchorPlugin({
      showDepth: 1,
      expand: {
        trigger: "hover",
        clickModeDefaultOpen: true,
      },
    }),
  ],
  theme: defaultTheme({
    lastUpdated: "Last Updated",
    sidebar,
    navbar,
  }),
};
