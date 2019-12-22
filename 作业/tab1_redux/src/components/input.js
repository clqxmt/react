import React from "react"

import store from "../store"
// import dispatcher from "../store/dispatcher"
import InputUI from "./inputUI"
import {inputChangeAction,listAddAction} from "../actions/actionsCreator"
class Input extends React.Component{
    constructor(){
        super()
        this.state=store.getState();
        
        store.subscribe(this.handleUpdate.bind(this))
       
    }
    render(){
        let {title,url,type,isRed} = this.state;
        return(
            <InputUI title={title} url={url} type={type} isRed={isRed}
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            ></InputUI>
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
       
        store.dispatch(inputChangeAction(params,e));
    }
    
    //提交
    handleSubmit(){
       
        let time=this.getTime();
       
        store.dispatch(listAddAction(time));
    }
    handleUpdate(){
        this.setState(store.getState());
    }
    
}

export default Input