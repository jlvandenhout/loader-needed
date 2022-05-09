const path = require("path");

module.exports = {
  title: "MRE: Loader needed",
  url: "http://localhost",
  baseUrl: "/",
  themes: [
    "@docusaurus/theme-classic",
    path.resolve(__dirname, "themes/not-found-dev"),
  ],
};
