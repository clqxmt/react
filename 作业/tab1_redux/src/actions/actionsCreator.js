import {inputChange,listAdd} from "./actionTypes"

export const inputChangeAction = (params,e)=>({
    
    type:inputChange,
    value:e.target.value,
    category:params.type
})


export const listAddAction = (time)=>({
    type:listAdd,
    time:time
})

