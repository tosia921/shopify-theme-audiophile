const path = require('path');
const outputDir = path.resolve(__dirname, 'theme/assets');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    header: [
      'regenerator-runtime/runtime.js',
      path.resolve(__dirname, 'src/js/header.js'),
    ],
    addToCartButton: [
      'regenerator-runtime/runtime.js',
      path.resolve(__dirname, 'src/js/addToCartButton.js'),
    ],
  },
  output: {
    path: outputDir,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
