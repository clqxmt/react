const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

//定义入口文件和出口文件的路径
const PATH = {
    app:path.join(__dirname,"../src/main.js"),
    build:path.join(__dirname,"../dist")
}

module.exports = {
    entry:{
        app:PATH.app
    },
    output:{
        //process.env.NODE_ENV 判断当前的额环境是哪个环境
        filename:process.env.NODE_ENV == "development"?"[name].js":"[name].[hash:8].js",
        path:PATH.build
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html",
            filename:"index.html"
        }),
        new CleanWebpackPlugin()
    ],
    //别名  优先引入的文件
    resolve:{
        extensions:[".jsx",".js",".json"],
        alias:{}
    },
    //模块打包   loader
    module:{
        //打包的规则
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                exclude:path.join(__dirname,"../node_modules")
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        limit:2048,
                        name:"image/[name].[hash:8].[ext]"
                    }
                }
            },
            {
                test:/\.(woff|woff2|ttf|eot|svg)$/,
                use:{
                    loader:"url-loader",
                    options:{
                        name:"iconfont/[name].[hash:8].[ext]"
                    }
                }
            }
        ]
    }
}