
module.exports = {
  devtool: 'inline-source-map',
  entry: "./app/app.jsx",
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'public'],
    extensions: ['', '.js', '.jsx']
  },
  module:{
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015']
          }
        }
      ]
    }
};
