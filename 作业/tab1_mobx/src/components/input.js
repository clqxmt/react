import React,{PureComponent} from "react" 
import {observer,inject} from "mobx-react"

@inject("store")
@observer
class Input extends PureComponent{
    render(){
        let {title,url,type,isRed,handleAddList} = this.props.store;
        console.log(title,url,type,isRed,111)
        return(
            <div>
                <label>新闻标题：</label>
                <input type="text" value={title} onChange={this.handleInputChange.bind(this,"title")} /><br/>
                <label>新闻地址：</label>
                <input type="text" value={url} onChange={this.handleInputChange.bind(this,"url")} /><br/>
                <label>新闻类别：</label>
                <select value={type} onChange={this.handleInputChange.bind(this,"type")}>
                    <option value="科技">科技</option>
                    <option value="娱乐">娱乐</option>
                    <option value="财经">财经</option>
                </select><br/>
                <label>是否标红：</label>
                是<input type="radio" checked={isRed} value="true" onChange={this.handleInputChange.bind(this,"isRed")}/>
                否<input type="radio" checked={!isRed} value="" onChange={this.handleInputChange.bind(this,"isRed")}/><br/>
                <button onClick={handleAddList}>添加</button>
            </div>
        )
    }
    handleInputChange(category,e){
        let val = e.target.value;
        this.props.store.handleChange(category,val);
    }
}


export default Input