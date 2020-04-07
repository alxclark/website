const path = require('path');

// @see https://github.com/zeit/next.js/blob/canary/packages/next-mdx/index.js
// Enhancing next-mdx to enable custom loaders

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextMDX = (pluginOptions = {}) => (nextConfig = {}) => {
  const extension = pluginOptions.extension || /\.mdx$/;

  return {
    ...nextConfig,
    experimental: {
      modern: true,
      polyfillsOptimization: true,
    },
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            options: pluginOptions.options,
          },
          path.join(__dirname, './packages/front-matter-loader'),
        ],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      // Preact configuration
      // @see https://github.com/developit/nextjs-preact-demo
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = {...cacheGroups.framework, test: preactModules};
          cacheGroups.commons.name = 'framework';
        } else {
          cacheGroups.preact = {
            name: 'commons',
            chunks: 'all',
            test: preactModules,
          };
        }
      }

      // inject Preact DevTools
      // if (dev && !isServer) {
      //   const entry = config.entry;
      //   config.entry = () =>
      //     entry().then((entries) => {
      //       entries['main.js'] = ['preact/debug'].concat(
      //         entries['main.js'] || [],
      //       );
      //       return entries;
      //     });
      // }

      return config;
    },
  };
};

const withMDX = nextMDX({extension: /\.(md|mdx)$/});

module.exports = withBundleAnalyzer(
  withMDX({
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
  }),
);
