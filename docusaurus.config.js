const path = require("path");

module.exports = {
  title: "MRE: Loader needed",
  url: "http://localhost",
  baseUrl: "/",
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: path.resolve(__dirname, "docs"),
      },
    ],
  ],
  themes: [
    "@docusaurus/theme-classic",
    path.resolve(__dirname, "themes/not-found-dev"),
  ],
};
