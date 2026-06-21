const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./pageTemplates/index/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./pageTemplates/ticket/index.html",
      inject: true,
      chunks: ["ticket"],
      filename: "ticket.html",
    }),
  ],
  entry: {
    index: "./app/index.ts",
    ticket: "./app/pages/tickets/tickets.ts",
  },

  module: {
    rules: [
      {
        test: /\.(png|jp?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/img/",
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@rest": path.resolve(__dirname, "./app/services/rest/"),
      "@services": path.resolve(__dirname, "./app/services/"),
      "@assets": path.resolve(__dirname, "./app/assets/"),
      "@myCss": path.resolve(__dirname, "./app/assets/styles/main.scss"),
    },

    extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
