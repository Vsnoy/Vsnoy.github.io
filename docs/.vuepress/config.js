const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance")
const { cursorEffects } = require("@anyfork/vuepress-plugin-cursor-effects-next")

const { defaultTheme } = require('@vuepress/theme-default')
const nav = require('./nav')

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
    cursorEffects({
      size: 2,
      shape: 'star',
      zIndex: 999999999
    }),
    mdEnhancePlugin({
      footnote: true,
      sub: true,
      sup: true,
    }),
    // AutoSidebarPluginOptions({
    //   title: {
    //     mode: "titlecase",
    //     map: {
    //       "/fe-piece/": "Piece",
    //       "/fe-basic/css/": "CSS",
    //       "/fe-basic/js/": "JS",
    //       "/engineer/ssh/": "SSH",
    //       "/question/js/": "JS",
    //     },
    //   },
    // })
  ],
  theme: defaultTheme({
    lastUpdated: "Last Updated",
    sidebar: "auto",
    nav,
  }),
};
