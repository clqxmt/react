import React from "react"
const url = require("url")

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
            name:""
        }
        // let {id,name} = this.props.match.params
        // this.state.id=id;
        // this.state.name=name
        let {id,name} = url.parse(this.props.location.search,true).query;
        this.state.id=id;
        this.state.name=name;
        console.log(this.props,111)
    }
    render(){
        let {id,name} = this.state
        return(
            <div>Detail
    <h2>接收到的id为---{id},name---{name}</h2>
            </div>
        )
    }
}

export default Detail