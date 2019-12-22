import React from "react"
import observer from "../observer"

class Input extends React.Component{
    constructor(){
        super()
        this.state={
            title:"",
            url:"",
            type:"",
            isRed:"",
            
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    render(){
        let {title,url,type,isRed} = this.state;
        return(
            <div>
                <label>新闻标题：</label>
                <input type="text" value={title} onChange={this.handleChange.bind(this,{type:'title'})}/><br/>
                <label>新闻地址：</label>
                <input type="text" value={url} onChange={this.handleChange.bind(this,{type:'url'})}/><br/>
                <label>新闻类别：</label>
                <select value={type} onChange={this.handleChange.bind(this,{type:'type'})}>
                    <option value="科技">科技</option>
                    <option value="娱乐">娱乐</option>
                    <option value="财经">财经</option>
                </select><br/>
                <label>是否标红：</label>
                <input type="radio" value="true" checked={isRed=='true'} onChange={this.handleChange.bind(this,{type:'isRed'})}/>
                <label>是</label>
                <input type="radio" value="" checked={isRed==''} onChange={this.handleChange.bind(this,{type:'isRed'})}/>
                <label>否</label><br/>
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
    handleChange(params,e){
        switch(params.type){
            case "title":
                this.setState({
                    title:e.target.value
                })
                break;
            case "url":
                this.setState({
                    url:e.target.value
                })
                break;
            case "type":
                this.setState({
                    type:e.target.value
                })
                break;
            case "isRed":
                this.setState({
                    isRed:e.target.value
                })
                break;
        }
        console.log(this.state);
        
    }
    
    handleSubmit(){
        // let time = this.getTime();
        
        observer.$emit("handleInfo",this.state);
    }
}

export default Input