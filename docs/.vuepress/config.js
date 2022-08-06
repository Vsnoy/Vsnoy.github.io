const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance")
const { cursorEffects: cursorEffectsPlugin } = require("@anyfork/vuepress-plugin-cursor-effects-next")
const { rightAnchorPlugin } = require("vuepress-plugin-right-anchor")

const { defaultTheme } = require('@vuepress/theme-default')

const navbar = require('./navbar')
const sidebar = require('./sidebar')

module.exports = {
  title: "Trauma",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/header.jpg",
      },
    ],
  ],
  markdown: {
    headers: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    backToTopPlugin(),
    mdEnhancePlugin({
      footnote: true,
      sub: true,
      sup: true,
    }),
    rightAnchorPlugin({
      showDepth: 1,
        // ignore: [
        //   '/',
        // ],
        expand: {
          trigger: 'hover',
          clickModeDefaultOpen: true
        },
    }),
    cursorEffectsPlugin({
      size: 2,
      shape: 'star',
      zIndex: 999999999
    }),
  ],
  theme: defaultTheme({
    lastUpdated: "Last Updated",
    sidebar,
    navbar,
  }),
};
