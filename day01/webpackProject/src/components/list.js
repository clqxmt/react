import React from "react"
import observer from "../observer"

class List extends React.Component{
    constructor(){
        super()
        this.state={
            tabList:[
                {
                    type:"科技",
                    content:[],
                },
                {
                    type:"娱乐",
                    content:[],
                },
                {
                    type:"财经",
                    content:[],
                }
            ],
            showIndex:0,
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
           
            this.state.tabList.map(item=>{
                if(params.type===item.type){
                    item.content.push({
                        title:params.title,
                        url:params.url,
                        time:time,
                        isRed:params.isRed
                    })
                }
            })
            
          
        })
       
    }
    render(){
        let {tabList,showIndex} = this.state
        return(
            <div>
                {
                    tabList.map((item,index)=>{
                        return <button key={index} 
                        style={{background:showIndex==index?'#f00':'',outline:'none'}}
                        onClick={this.handleClick.bind(this,index)}>{item.type}</button>
                    })
                }
                <hr/>
                {
                    tabList.map((item,index)=>{
                        return <ul key={index} style={{display:showIndex==index?'block':'none'}}>
                                    {
                                        item.content.map((item,index)=>{
                                            return <li key={index} style={{background:item.isRed?'#f00':'#eee'}}>
                                                    <a href={item.url}>{item.title}</a>
                                                    <span>{item.time}</span>
                                                </li>
                                        })
                                    }
                                </ul>
                    })
                }
                
            </div>
        )
    }
  
    handleClick(index){
        this.setState({
            showIndex:index
        })
    }
}

export default List