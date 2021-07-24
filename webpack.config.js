const path = require('path');

module.exports = {
  entry: {  
    bundle: './src/js/index.js',
    notFound: './src/js/not_found.js',
    constellation: './src/js/constellation_build.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs/js'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};