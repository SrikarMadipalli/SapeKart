const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `./public/js/index.js`,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
      { test: /\.css$/,
        loaders: ['style-loader', 'css-loader'] 
      },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
     
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
       // Font-awesome 4.7.X
       {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/vendors/, /img/],
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      // MDB
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [/node_modules/, /img/],
        loader: 'file-loader?name=font/roboto/[name].[ext]',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};