import axios from "axios"

export const getDataApi = ()=>axios({
    method:"get",
    url:"/Service/callback.mi/Showtime/LocationMovies.api",
    params:{
        locationId:290,
        t:"2019112615123465731"
    }
    // http://m.mtime.cn/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=
})