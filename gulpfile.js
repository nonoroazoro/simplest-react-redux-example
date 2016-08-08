const gulp = require("gulp");
const gutil = require("gulp-util");
const taskListing = require("gulp-task-listing");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const devConfig = require("./webpack.config");

gulp.task("h", taskListing.withFilters(null, "h|help|default"));

gulp.task("build", () =>
{
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
    new WebpackDevServer(webpack(devConfig), {
        contentBase: "./public",
        publicPath: devConfig.output.publicPath
    }).listen(8080, "localhost", (err) =>
    {
        if (err)
        {
            throw new gutil.PluginError("webpack-dev-server", err);
        }
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});

gulp.task("default", ["dev"], () =>
{
});