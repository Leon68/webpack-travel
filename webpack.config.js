var webpack = require('webpack')
module.exports = {
  devtool:'souce-map',
  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    port: '8080',
    inline: true,
    historyApiFallback:true
  },
  module: {
    rules: [
      {
      test: /(\.js|\.jsx)$/,
      use: {
        loader: 'babel-loader',

      },
      exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        }]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  }
}
