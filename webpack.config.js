const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      contentBase: './deploy',
      open: true
    },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
  module: {
    rules: [
      { 
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"] 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
           'file-loader',
         ],
      }
    ]
  },
};