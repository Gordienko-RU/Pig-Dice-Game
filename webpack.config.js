const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/ },
      { loader: 'babel-loader', test: /\.jsx$/, exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './bin',
    inline:true
  }

};
