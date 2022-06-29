module.exports = {
  base: '/study-notes/',
  title: "大花园",
  description: "",
  themeConfig: {
    nav: require("./nav"),
    sidebar: require("./sidebar"),
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  }
};
