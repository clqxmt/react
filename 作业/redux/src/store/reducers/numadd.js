
import {numAdd} from "../../actions/actionTypes"

const defaultState={
    n:10
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case numAdd:
            let numState = Object.assign({},state);
            numState.n++
            return numState
    }
    return state;
}