// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://noop/',
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/team': { page: '/team' },
      '/press': { page: '/press' },
      '/contact': { page: '/contact' },
      '/blog': { page: '/blog' },
      '/solutions/photography': { page: '/solutions/photography' },
      '/solutions/education': { page: '/solutions/education' },
      '/solutions/research': { page: '/solutions/research' },
      '/solutions/aviation': { page: '/solutions/aviation' },
      '/solutions/photography-detail': { page: '/solutions/photography-detail' },
      '/solutions/education-detail': { page: '/solutions/education-detail' },
      '/solutions/research-detail': { page: '/solutions/research-detail' },
      '/solutions/aviation-detail': { page: '/solutions/aviation-detail' },
      '/solutions': { page: '/solutions' },
    };
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Important: return the modified config
    return config;
  } /*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */,
};
