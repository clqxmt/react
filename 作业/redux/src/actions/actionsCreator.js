import {inputChange,listAdd,numAdd,todolistDel,todolistAdd,todolistInputChange,tabinputChange,tablistAdd} from "./actionTypes"

import {tableInputChange,tableAdd,tableDel,tableCancel,tableToUpdate,tableUpdate,tableClickLi} from "./actionTypes"

/**
 * numadd
 */
export const numAddAction={
    type:numAdd
}

/**
 * 
 * todolist 
 */

export const todolistChangeAction=(value)=>({
   type:todolistInputChange,
   value:value
})
export const todolistAddAction ={
    type:todolistAdd,
    
}
export const listDelAction=(index)=>({
    type:todolistDel,
    index
})


/**
 * 
 * 
 * todolist1
 */

export const inputChangeAction = (value,params)=>({
    
    type:inputChange,
    value:value,
    category:params
})


export const listAddAction = (time)=>({
    type:listAdd,
    time:time
})


/**
 * 
 * todolist2
 */

 export const tabinputChangeAction=(value,category)=>({
     
    type:tabinputChange,
    value:value,
    category:category
 })
 export const tablistAddAction = (time)=>({
    type:tablistAdd,
    time:time
 })

 /**
  * table
  */


export const tableInputChangeAction = (value,category)=>({
    type:tableInputChange,
    value:value,
    category
})

export const tableCancelAction = {
    type:tableCancel
}

export const tableAddAction = {
    type:tableAdd
}

export const tableUpdateAction ={
    type:tableUpdate
    
}

export const tableDelAction = (index)=>({
    type:tableDel,
    index
})


export const tableToUpdateAction =(index)=>( {
    type:tableToUpdate,
    index
})

export const tableClickLiAction = (index)=>({
    type:tableClickLi,
    index
})
