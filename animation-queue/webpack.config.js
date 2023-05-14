module.exports = {
  entry: "./index.js",
  mode: "development",
  devServer: {
    port: 8000,
    static: {
      directory: __dirname
    }
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

