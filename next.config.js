module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            publicPath: '/_next',
            outputPath: 'static',
            name: '[name].[hash].[ext]',
          },
        },
      }
    );

    return config;
  },
};