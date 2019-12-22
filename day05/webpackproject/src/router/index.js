import {Movie,Cinema,Mine,Login,HotMovie,CommingMovie} from "../pages"

//用来配置带tabbar的路由
export const TabBarRoutes = [
    {
        path:"/movie",
        component:Movie,
        meta:{
            flag:true
        },
        text:"电影",
        icon:"\ue717",
        children:[
            {
                path:"/movie/hotmovie",
                component:HotMovie,
                meta:{
                    flag:true
                }
            },
            {
                path:"/movie/commingmovie",
                component:CommingMovie,
                meta:{
                    flag:true
                }
            }
        ]
    },
    {
        path:"/cinema",
        component:Cinema,
        meta:{
            flag:true
        },
        text:"影院",
        icon:"\ue61d"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        text:"我的",
        icon:"\ue605"
    }
]

//用来配置不带tabbar的路由
export const NoTabBarRoutes=[
    {
        path:"/login",
        component:Login
    }
]

export const routeConfig = TabBarRoutes.concat(NoTabBarRoutes)