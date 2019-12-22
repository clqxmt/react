import React from "react"

class InputUI extends React.Component{
    render(){
        return(
            <div>
                <label>新闻标题：</label>
                <input type="text" value={this.props.title} onChange={this.props.handleChange.bind(this,{type:'title'})}/><br/>
                <label>新闻地址：</label>
                <input type="text" value={this.props.url} onChange={this.props.handleChange.bind(this,{type:'url'})}/><br/>
                <label>新闻类别：</label>
                <select value={this.props.type} onChange={this.props.handleChange.bind(this,{type:'type'})}>
                    <option value="科技">科技</option>
                    <option value="娱乐">娱乐</option>
                    <option value="财经">财经</option>
                </select><br/>
                <label>是否标红：</label>
                <input type="radio" value="true" checked={this.props.isRed=='true'} onChange={this.props.handleChange.bind(this,{type:'isRed'})}/>
                <label>是</label>
                <input type="radio" value="" checked={this.props.isRed==''} onChange={this.props.handleChange.bind(this,{type:'isRed'})}/>
                <label>否</label><br/>
                <button onClick={this.props.handleSubmit.bind(this)}>提交</button>
            </div>
        )
    }
}

export default InputUI