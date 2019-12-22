//路由的懒加载

import Loadable from "react-loadable"

import Loading from "../common/loading"


export const Movie = Loadable({
    loader:()=>import("./movie"),
   
    loading:Loading
})

export const Cinema = Loadable({
    loader:()=>import("./cinema"),
    loading:Loading
})

export const Mine = Loading({
    loader:()=>import("./mine"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const HotMovie = Loadable({
    loader:()=>("./hotmovie"),
    loading:Loading
})

export const CommingMovie = Loadable({
    loader:()=>import("./commingmovie"),
    loading:Loading
})