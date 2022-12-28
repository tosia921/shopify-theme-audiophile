const path = require("path");
const outputDir = path.resolve(__dirname, "dist/assets");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        one: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/js/one.js")],
        two: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/js/two.js")],
    },
    output: {
        path: outputDir,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
};