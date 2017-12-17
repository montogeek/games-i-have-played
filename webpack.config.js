var webpack = require('webpack')
var path = require('path')

module.exports = {
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
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    compress: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/graphql": "http://localhost:4000"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
