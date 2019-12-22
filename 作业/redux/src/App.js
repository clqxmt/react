import React from "react"
import Input from "./components/todolist1/input"
import List from "./components/todolist1/list"
import NumAdd from "./components/numadd"
import TodoList from "./components/todolist"
import InputTwo from "./components/todolist2/input"
import ListTwo from "./components/todolist2/list"
import Add from "./components/table/add"
import Update from "./components/table/update"
import TableList from "./components/table/list"
import {Div} from "./styled"
import store from "./store"
class App extends React.Component{
    constructor(){
        super()
        this.state=store.getState().table;
        console.log(this.state,111);
        store.subscribe(this.handleUpdate.bind(this));
    }
    render(){
        let {isShow} = this.state
        return(
            <div className="app">
                <Div>
                    <NumAdd></NumAdd>
                </Div>
                <Div>
                    <Input></Input>
                    <List></List>
                </Div>
                <Div>
                    <TodoList></TodoList>
                </Div>
                <Div>
                    <InputTwo></InputTwo>
                    <ListTwo></ListTwo>
                </Div>
                <Div>
                    {
                        isShow?<Add></Add>:<Update></Update>
                    }
                    <TableList></TableList>
                </Div>
            </div>
        )
    }

    handleUpdate(){
        this.setState(store.getState().table)
    }
}

export default App