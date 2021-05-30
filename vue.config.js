module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/carbohydrate-calculator/" : "/",
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    transpileDependencies: ["@coreui/utils", "@coreui/vue"],
    pages: {
        index: {
            entry: "src/main.js",
            title: "CH Calculator"
        }
    }
};
