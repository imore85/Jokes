const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'), //Place we want webpack to consolidate
  output: {
    path: path.join(__dirname, '/client/dist'), //Path that we want the webpack files to be added
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  devtool: 'eval-cheap-module-source-map',
  // [devServer] configuration for the live server including port
  devServer: {
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, 'client/dist'),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
  },
};
