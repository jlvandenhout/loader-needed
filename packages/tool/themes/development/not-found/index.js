const path = require("path");

module.exports = function () {
  return {
    name: "theme-development/not-found",
    getThemePath: () => path.resolve(__dirname, "./theme"),
  };
};
