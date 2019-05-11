const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "build.js",
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|ttf|woff|png|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: (name, path) => {
                console.log(name);
                if (/fonts/.test(path)) {
                  return `fonts/${name}`;
                } else if (/img/.test(path)) {
                  return `img/${name}`;
                } else if (/node_modules/.test(path)) {
                  return `lib/${name}`;
                } else {
                  return `unknown/${name}`;
                }
              }
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "src/",
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: true
    })
  ]
};
