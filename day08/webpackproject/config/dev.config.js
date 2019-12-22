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
        proxy:{
            
            // "/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2019112610393283915"
            "/Service":{
                target:"http://m.mtime.cn",
                changeOrigin:true
            }
            // "/api":{
            //     target:"http://39.97.33.178",
            //     changeOrigin:true
            // }
        }
    }

})


module.exports = config;