import React from "react"
import Input from "./components/input"
import List from "./components/list"

class App extends React.Component{
   
    render(){
        return(
            <div className="app">
                <Input></Input>
                <List></List>
            </div>
        )
    }
}

export default App