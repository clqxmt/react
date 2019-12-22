import React from "react"

// import dispatcher from "../store/dispatcher"
import ListUI from "./listUI"
import store from "../store"

class List extends React.Component{
    constructor(){
        super()
        let {tabList}=store.getState();
        
        this.state={
            tabList,
            showIndex:0
        }
        
       store.subscribe(this.handleUpdate.bind(this))
        
    }
    
    render(){
        let {tabList,showIndex} = this.state
        
        return(
            <ListUI tabList={tabList} showIndex={showIndex}
            handleClick={this.handleClick.bind(this)}
            ></ListUI>
        )
    }
  
    handleClick(index){
        
        this.setState({
            showIndex:index
        })
       
    }
    handleUpdate(){
        let {tabList}=store.getState()
        this.setState({
            tabList
        })
    }
}

export default List