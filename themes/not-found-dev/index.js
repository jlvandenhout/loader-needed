const path = require("path");

module.exports = function () {
  return {
    name: "theme-not-found-dev",
    getThemePath: () => path.resolve(__dirname, "./theme"),
  };
};
