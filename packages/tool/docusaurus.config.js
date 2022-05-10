const path = require("path");

module.exports = {
  title: "Tool",
  url: "http://localhost",
  baseUrl: "/",
  themes: [
    "@docusaurus/theme-classic",
    path.resolve(__dirname, "themes/development/not-found"),
  ],
};
