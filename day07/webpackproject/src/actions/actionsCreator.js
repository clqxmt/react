import {getData} from "./actionTypes"
import {getDataApi} from "../api/movie"

export const getDataAsyncAction = ()=>{
    console.log(22);
     var getDataAction=(data)=> ({
        type:getData,
        data:data
    })

    return async (dispatch)=>{
        let data = await getDataApi()
        dispatch(getDataAction(data))
        
    }


}