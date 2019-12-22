import {inputChange,listAdd,listCancel,listUpdate,listToUpdate,listDel,listActive} from "./actionTypes"


export const inputChangeAction = (category,value)=>({
    type:inputChange,
    value,
    category
})

export const listAddAction = {
    type:listAdd
}

export const listDelAction = (index)=>({
    type:listDel,
    index,
})

export const listToUpdateAction= (index)=>({
    type:listToUpdate,
    index
})

export const listCancelAction={
    type:listCancel
}

export const listUpdateAction={
    type:listUpdate
}

export const listClickLiAction=(id)=>({
    type:listActive,
    id
})