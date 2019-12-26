const chalk = require("chalk");
const consoleClear = require("console-clear");
const { handleWebpackErr } = require("rax-compile-config");
module.exports = (api, options = {}) => {
  const {onHook, onGetWebpackConfig} = api;
  onHook("after.build.compile", async ({ err, stats }) => {
  });
};
