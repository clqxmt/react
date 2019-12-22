import React from "react"
import observer from "../observer"

class List extends React.Component{
    constructor(){
        super()
        this.state={
            tabList:[],
           
        }
        this.getTime=function(){
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
            // this.setState({
            //     time:time
            // })
        }
        observer.$on("handleInfo",(params)=>{
           let time= this.getTime();
           let tabList = this.state.tabList
           tabList.push({
                type:params.type,
                title:params.title,
                url:params.url,
                time:time,
                isRed:params.isRed
            })
            
            this.setState({
                tabList:tabList
            })
        })
       
    }
    render(){
        let {tabList} = this.state
        return(
            <div>
                
        
                {
                    tabList.map((item,index)=>{
                    return <li key={index}>
                    <span>[{item.type}]</span>
                    <a href={item.url} style={{color:item.isRed?'#f00':''}}>{item.title}</a>
                    <span style={{float:'right'}}>{item.time}</span></li>
                    })
                }
               
                
            </div>
        )
    }
  
    
}

export default List