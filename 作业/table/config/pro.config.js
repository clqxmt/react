const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")
const config = webpackMerge(baseConfig,{
    mode:"production",
    module:{
        rules:[
            {
               test:/\.(css|scss)$/,
               use:ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {loader:"css-loader"},
                        {loader:"postcss-loader"},
                        {loader:"sass-loader"}
                    ]
               })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:"css/[name].[hash:8].css"
        })
    ]
})


module.exports = config;