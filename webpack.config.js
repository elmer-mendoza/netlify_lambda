const currentTask = process.env.npm_lifecycle_event
const path =require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')

const config =  {
  entry: './app/app.js',
  output: {
    filename: 'myBundle.[hash].js',
    path: path.resolve(__dirname,'dist')
  },
  plugins: [new HtmlWebpackPlugin({template: './app/index.html'}) ],
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true //Will not reload but will on changed element in js script
    },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.js*/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env',{
                'useBuiltIns': "usage",
                'corejs': 3,
                'targets': 'defaults'
              }],
             '@babel/preset-react']
          }
        }
      }
    ]
  },  
  mode: 'development', //OR 'production' **both are optional to remove warnings in terminal
  devtool: 'eval-cheap-source-map'
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
  config.plugins.push(
    new MiniCssExtractPlugin({filename: 'main.[hash].css'}),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin())
}

module.exports = config


// module.exports = {
//   entry: './app/app.js',
//   output: {
//     filename: 'myBundle.js',
//     path: path.resolve(__dirname,'dist')
//   },
//   // watch: true, //No need if there is devServer
//   devServer: {
//     port: 8080,
//     contentBase : path.resolve(__dirname,'dist')
//   },
//   mode: 'development' //OR 'production'
// }