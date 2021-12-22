// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less-fix');
// TODO: back to 'craco-less' when this issue is fixed: https://github.com/DocSpring/craco-less/issues/86
// const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#727cf5' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
