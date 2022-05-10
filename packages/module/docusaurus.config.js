const path = require("path");

module.exports = {
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: path.resolve(__dirname, "docs"),
      },
    ],
  ],
};
