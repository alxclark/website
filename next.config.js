const path = require('path');

// @see https://github.com/zeit/next.js/blob/canary/packages/next-mdx/index.js
// Enhancing next-mdx to enable custom loaders
const nextMDX = (pluginOptions = {}) => (nextConfig = {}) => {
  const extension = pluginOptions.extension || /\.mdx$/;

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: pluginOptions.options,
          },
          path.join(__dirname, './packages/front-matter-loader'), // Our custom loader
        ],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};

const withMDX = nextMDX({extension: /\.(md|mdx)$/});

module.exports = withMDX({
  pageExtensions: ['mdx', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
});
