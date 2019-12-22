import {todolistInputChange,todolistAdd,todolistDel} from "../../actions/actionTypes"


const defaultState = {
    inputVal:"",
    tabList:[]
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case todolistInputChange:
            let inputState = JSON.parse(JSON.stringify(state))
            inputState.inputVal=action.value;
            return inputState;
        case todolistAdd:
            let tabListState = JSON.parse(JSON.stringify(state))
            tabListState.tabList.push(tabListState.inputVal)
            tabListState.inputVal="";
            return tabListState;
        case todolistDel:
            let listState = Object.assign({},state);
            listState.tabList.splice(action.index,1);
            return listState;
    }

    return state
}