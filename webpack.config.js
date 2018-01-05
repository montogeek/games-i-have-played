const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  entry: ['react-hot-loader/patch', './client/index.js'],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    compress: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/graphql': 'http://localhost:4000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Games I have played',
      template: './client/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js']
      }
    })
  ]
}

const prodConfig = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      title: 'Games I have played',
      template: './client/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js']
      }
    }),
    new ExtractTextPlugin('[md5:contenthash:base64:16].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true
    })
  ]
}

module.exports = env => {
  return env === 'production' ? prodConfig : devConfig
}
