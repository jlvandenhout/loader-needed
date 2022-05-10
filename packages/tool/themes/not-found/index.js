const path = require("path");

module.exports = function () {
  return {
    name: "tool-theme-not-found",
    getThemePath: () => path.resolve(__dirname, "./theme"),
  };
};
