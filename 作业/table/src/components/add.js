import React from "react"
import observer from "../observer"

class Add extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            age:"",
            sign:""
        }
        this.handleAdd=this.handleAdd.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }
    render(){
        
        return(
            <div>
                姓名：<input type="text" onChange={this.handleChange.bind(this,{type:'name'})}/><br/>
                年龄：<input type="text" onChange={this.handleChange.bind(this,{type:'age'})}/><br/>
                个性签名：<input type="text" onChange={this.handleChange.bind(this,{type:'sign'})}/><br/>
                <button onClick={this.handleAdd}>添加</button>
                <button onClick={this.handleCancel}>取消</button>
            </div>
        )
    }
    handleChange(params,e){
        switch(params.type){
            case "name":
                this.setState({
                    name:e.target.value
                })
                break;
            case "age":
                this.setState({
                    age:e.target.value
                })
                break;
                case "sign":
                this.setState({
                    sign:e.target.value
                })
                break;
        }
    }

    handleAdd(){
        observer.$emit("handleAddData",this.state);
        this.setState({
            name: "",
            age: "",
            sign: ""
        })
    }    
    handleCancel(){
        this.setState({
            name:"",
            age:"",
            sign:""
        })
    }
}

export default Add