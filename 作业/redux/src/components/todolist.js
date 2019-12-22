import React from "react"

import store from "../store"

import {todolistChangeAction,todolistAddAction,listDelAction} from "../actions/actionsCreator"
class TodoList extends React.Component{
    constructor(){
        super();
        this.state=store.getState().todolist;
        store.subscribe(this.handleUpdate.bind(this))
    }

    render(){
        let {inputVal,tabList} = this.state;
        return(
            <div>
                <input type="text" vlaue={inputVal} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleAdd.bind(this)}>提交</button>
                
                    {
                        tabList.map((item,index)=>{
                        return <li key={index}>
                            <span>{item}</span>
                            <button onClick={this.handleDel.bind(this,index)}>删除</button>
                        </li>
                        })
                    }
                
            </div>
        )
        
    }
    
    handleDel(index){
        store.dispatch(listDelAction(index))
    }
    handleAdd(){
        
        store.dispatch(todolistAddAction)
    }

    handleChange(e){
        let value=e.target.value;
        store.dispatch(todolistChangeAction(value))
    }

    handleUpdate(){
        this.setState(store.getState().todolist)
    }
}

export default TodoList