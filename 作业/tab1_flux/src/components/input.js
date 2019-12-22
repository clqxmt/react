import React from "react"

import store from "../store"
import dispatcher from "../store/dispatcher"
class Input extends React.Component{
    constructor(){
        super()
        this.state=store.getState();
        
        store.handleUpdate(this.handleUpdate.bind(this))
       
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
                <button onClick={this.handleSubmit.bind(this)}>提交</button>
            </div>
        )
    }

    //获取时间
    getTime(){
        var _date=new Date();
            // // var _time=_date.getTime();
        var _year=_date.getFullYear();
        var _month=(_date.getMonth()+1)>=10?(_date.getMonth()+1):("0"+(_date.getMonth()+1));
        var _ri=_date.getDate();
        // var _day=_date.getDay();
        var _hours=_date.getHours()>=10?(_date.getHours()):("0"+_date.getHours());
        var _minutes=_date.getMinutes()>=10?(_date.getMinutes()):("0"+_date.getMinutes());
        var _seconds=_date.getSeconds()>=10?(_date.getSeconds()):("0"+_date.getSeconds());
        var _time=_year+"-"+_month+"-"+_ri+" "+_hours+":"+_minutes+":"+_seconds;
        return _time;
        
    }
    //input值发生改变时
   
    handleChange(params,e){
        
        let val=e.target.value
        let action={
            type:"INPUT_CHNAGE",
            value:val,
            category:params.type
        }
        dispatcher.dispatch(action);
    }
    
    //提交
    handleSubmit(){
        let time=this.getTime();
        
        let action={
            type:"LIST_ADD",
            time:time
        }
        dispatcher.dispatch(action);
    }
    handleUpdate(){
        this.setState(store.getState());
    }
    
}

export default Input