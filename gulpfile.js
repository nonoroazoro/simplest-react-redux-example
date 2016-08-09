const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const gTaskListing = require("gulp-task-listing");
const WebpackDevServer = require("webpack-dev-server");

gulp.task("h", gTaskListing.withFilters(null, "h|help|default"));

gulp.task("build", () =>
{
    const devConfig = require("./webpack.config");
    webpack(devConfig, (err, stats) =>
    {
        if (err)
        {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log("[webpack]", stats.toString());
    });
});

gulp.task("dev", () =>
{
    const port = "8080";
    const ip = "http://localhost";
    const devConfig = require("./webpack.config");

    // 1. Hot module replacement of webpack-dev-server.
    devConfig.entry.index.unshift(`webpack-dev-server/client?${ip}:${port}`, "webpack/hot/dev-server");
    devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    // 2. Hot module replacement of react-hot-loader.
    devConfig.module.loaders[0].loaders.unshift("react-hot");

    // 3. Config webpack-dev-server.
    new WebpackDevServer(webpack(devConfig), {
        hot: true, // For Hot module replacement.
        contentBase: "./public",
        publicPath: devConfig.output.publicPath
    }).listen(port, "localhost", (err) =>
    {
        if (err)
        {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack-dev-server]", `${ip}:${port}`);
    });
});

gulp.task("default", ["dev"], () =>
{
});