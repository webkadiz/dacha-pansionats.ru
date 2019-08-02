const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = env => ({
  entry: { 
    'security-fire': "./src/index.js",
    slick: './src/slick.js'
  },
  output: {
    path: __dirname + "/build",
    filename: env === "development" ? "[name].js" : "[name].production.js",
    publicPath: "/"
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserJSPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              data: "$dev: " + (env === 'development') + ";"
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(eot|ttf|woff|png|svg|gif|jpg)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "security-fire-assets/[name].[ext]"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.html/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src", ":src", ":style"]
          }
        }
      }
    ]
  },
  devServer: {
    port: 9000,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: env === "development" ? "[name].css" : "[name].production.css",
    }),
    new CleanWebpackPlugin()
  ]
});
