import {Dispatcher} from "flux"
import store from "./index.js";

const dispatcher = new Dispatcher();
//接收
dispatcher.register((action)=>{
    switch(action.type){
        case "INPUT_CHNAGE":
            store.handleChange(action);
            break;
        case "LIST_ADD":
            store.handleAdd(action.time);
            break;
    }
    
});

export default dispatcher