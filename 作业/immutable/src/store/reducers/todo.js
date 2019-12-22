import immutable from "immutable"

const defaultState=immutable.fromJS({
    inputVal:"",
    tabList:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case "INPUT_CHANGE":
           return state.updateIn(["inputVal"],_=>action.value)
        case "ADD_LIST":
            return state.updateIn(["tabList"],tabList=>tabList.push(state.getIn(["inputVal"])))
            .updateIn(["inputVal"],_=>"")
        case "DEL_LIST":
            return state.updateIn(["tabList"],tabList=>tabList.splice(action.index,1))
    }
    return state;
}