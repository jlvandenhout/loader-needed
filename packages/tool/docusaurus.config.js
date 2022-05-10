const path = require("path");
const config = require(path.resolve(process.cwd(), "docusaurus.config.js"));

module.exports = {
  title: "Tool",
  url: "http://localhost",
  baseUrl: "/",
  plugins: config.plugins,
  themes: [
    "@docusaurus/theme-classic",
    path.resolve(__dirname, "themes/not-found"),
  ],
  themeConfig: {
    announcementBar: {
      id: "preview",
      content:
        'This is a local preview. Please find available routes <a href="/404">here</a>.',
      isCloseable: false,
    },
  },
};
