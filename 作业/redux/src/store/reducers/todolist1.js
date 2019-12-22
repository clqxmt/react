import { inputChange, listAdd } from "../../actions/actionTypes"

//初始化state

const defaultState = {
    title: "",
    type: "科技",
    url: "",
    isRed: "true",
    tabList: [
        {
            title: "科技",
            content: []
        },
        {
            title: "娱乐",
            content: []
        },
        {
            title: "财经",
            content: []
        },
    ]
}

export default (state=defaultState,action)=>{
    
    switch(action.type){
        case inputChange:
                
                // let inputState = Object.assign({},state);
            let inputState = JSON.parse(JSON.stringify(state))
            // console.log(inputState,666)
            switch(action.category){
                case "title":
                    inputState.title=action.value;
                    break;
                case "type":
                        inputState.type=action.value;
                        break;
                case "url":
                        inputState.url=action.value;
                        break;
                case "isRed":
                        inputState.isRed=action.value;
                        break;

            }
            return inputState;
        case listAdd:
            // let listState = Object.assign({},state);
            let listState = JSON.parse(JSON.stringify(state))
            listState.tabList.map(item=>{
                if(item.title===listState.type){
                    item.content.push({
                        title:listState.title,
                        url:listState.url,
                        isRed:listState.isRed,
                        time:action.time
                    })
                    listState.title="";
                    listState.url="";
                }
                
            })
            return listState;
    }
    return state
}



// import {Dispatcher} from "flux"
// import store from "./index.js";

// const dispatcher = new Dispatcher();
// //接收
// dispatcher.register((action)=>{
//     switch(action.type){
//         case "INPUT_CHNAGE":
//             store.handleChange(action);
//             break;
//         case "LIST_ADD":
//             store.handleAdd(action.time);
//             break;
//     }

// });

// export default dispatcher