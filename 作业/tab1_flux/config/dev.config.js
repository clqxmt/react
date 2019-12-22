const webpackMerge = require("webpack-merge");
const baseConfig  = require("./base.config");


const config = webpackMerge(baseConfig,{
    mode:"development",
    module:{
        rules:[
            {
                test:/\.(css|scss)$/,
                use:["style-loader","css-loader","postcss-loader","sass-loader"]
            }
        ]
    },
    devServer:{
        port:9000,
        open:true,
        proxy:{}
    }

})


module.exports = config;