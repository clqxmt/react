import React from "react"
import Update from "./components/update"
import Add from "./components/Add"
import List from "./components/list"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            isShow:true
        }
        this.handleShowUpdate=this.handleShowUpdate.bind(this)
    }
    render(){
        let {isShow} = this.state
        return(
            <div className="app">
                {
                    isShow?<Add></Add>:<Update showUpdate={this.handleShowUpdate}></Update>
                    
                }
                <List showUpdate={this.handleShowUpdate}></List>
            </div>
        )
    }
    handleShowUpdate(params){
        this.setState({
            isShow:params
        })
    }
}

export default App