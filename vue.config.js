const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          importer: nodeSassMagicImporter(),
        },
      },
    },
  },
  lintOnSave: false,
};
