const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const gTaskListing = require("gulp-task-listing");
const WebpackDevServer = require("webpack-dev-server");

gulp.task("h", gTaskListing.withFilters(null, "h|help|default"));

gulp.task("dev", () =>
{
    const port = "8888";
    const address = "http://localhost";
    const devConfig = require("./webpack.dev.config");

    // 1. Hot module replacement of webpack-dev-server.
    devConfig.entry.index.unshift(`webpack-dev-server/client?${address}:${port}`, "webpack/hot/dev-server");
    devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    // 2. Hot module replacement of react-hot-loader.
    devConfig.module.loaders[0].loaders.unshift("react-hot");

    // 3. Config webpack-dev-server.
    new WebpackDevServer(webpack(devConfig), {
        hot: true, // For Hot module replacement.
        compress: true, // gzip
        stats:
        {
            chunks: false,
            colors: true
        },
        contentBase: "./public",
        publicPath: devConfig.output.publicPath
    }).listen(port, "localhost", (err) =>
    {
        if (err)
        {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack-dev-server]", `${address}:${port}`);
    });
});

gulp.task("default", ["dev"], () =>
{
});
