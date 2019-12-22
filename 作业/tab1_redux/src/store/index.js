import {createStore} from "redux"

import reducer from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"
const store = createStore(reducer,composeWithDevTools())


export default store


















// import observer from "../observer.js"

// const store =Object.assign(observer,{
//     state:{
//         title:"",
//         type:"科技",
//         url:"",
//         isRed:"true",
//         tabList:[
//             {
//                 title:"科技",
//                 content:[]
//             },
//             {
//                 title:"娱乐",
//                 content:[]
//             },
//             {
//                 title:"财经",
//                 content:[]
//             },
//         ]
//     },
//     getState(){
//         return this.state;
//     },
//     //input框中的值发生改变
//     handleChange(action){
//         switch(action.category){
//             case "title":
//                 this.state.title=action.value;
//                 break;
//             case "type":
//                 this.state.type=action.value;
//                 break;
//             case "url":
//                 this.state.url=action.value;
//                 break;
//             case "isRed":
//                 this.state.isRed=action.value;
//                 break;
//         }
        
//         observer.$emit("update");
//     },
//     //提交
//     handleAdd(time){
//         this.state.tabList.map((item)=>{
            
//             if(item.title===this.state.type){
//                item.content.push({
//                     title:this.state.title,
//                     type:this.state.type,
//                     url:this.state.url,
//                     isRed:this.state.isRed,
//                     time:time
//                 })
//             }
//         })
//         observer.$emit("update");
//     },
//     handleUpdate(callback){
//         observer.$on("update",callback);
//     }
// })

// export default store