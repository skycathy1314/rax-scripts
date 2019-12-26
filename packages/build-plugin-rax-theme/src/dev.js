const consoleClear = require("console-clear");
const chalk = require("chalk");
const { handleWebpackErr } = require("rax-compile-config");

module.exports = (api, options = {}) => {
  const {onHook, onGetWebpackConfig} = api;

	onGetWebpackConfig((config) => {
    console.log('theme true');

    config.module
      .rule('css')
      .test(/\.css?$/)
      .use('css')
      .loader(require.resolve('stylesheet-loader'))
      .options({
        theme: true
      });

    config.module
      .rule('less')
      .test(/\.less?$/)
      .use('css')
      .loader(require.resolve('stylesheet-loader'))
      .end()
      .use('less')
      .loader(require.resolve('less-loader'))
      .options({
        theme: true
      });

  });

  onHook("before.start.load", async args => {
    console.log("before.start.load", args);
  });
};
