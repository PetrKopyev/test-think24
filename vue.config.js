const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/test-think24/'
      : '/',
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
};
