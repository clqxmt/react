import React from "react"

class ListUI extends React.Component{
    render(){
        return(
            <div>
                {
                    this.props.tabList.map((item,index)=>{
                        return <button key={index} 
                        style={{background:this.props.showIndex==index?'#f00':'',outline:'none'}}
                        onClick={this.props.handleClick.bind(this,index)}>{item.title}</button>
                    })
                }
                <hr/>
                {
                    this.props.tabList.map((item,index)=>{
                        return <ul key={index} style={{display:this.props.showIndex==index?'block':'none'}}>
                                    {
                                        item.content.map((item,index)=>{
                                            return <li key={index} style={{background:item.isRed?'#f00':'#eee'}}>
                                                    <a href={item.url} style={{float:'left'}}>{item.title}</a>
                                                    <span style={{float:'right'}}>{item.time}</span>
                                                </li>
                                        })
                                    }
                                </ul>
                    })
                }
                
            </div>
        )
    }
}

export default ListUI