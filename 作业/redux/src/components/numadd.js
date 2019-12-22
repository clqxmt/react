import React from "react"
import store from "../store/index"

import {numAddAction} from "../actions/actionsCreator"
class NumAdd extends React.Component{
    constructor(){
        super();
        this.state=store.getState().numadd;
        store.subscribe(this.handleUpdate.bind(this))
    }
    render(){
        let {n}=this.state;
        return(
            <div>
                {/* <input type="text" value={numInputValue}></input> */}
                <h2>{n}</h2>
                <button onClick={this.handleClickAdd.bind(this)}>点击+1</button>
            </div>
        )
    }
    handleClickAdd(){
        store.dispatch(numAddAction)
    }
    handleUpdate(){
        this.setState(store.getState().numadd);
    }
}
export default NumAdd;