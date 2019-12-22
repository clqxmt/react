import React, { PureComponent } from "react"
import {observer,inject} from "mobx-react"

@inject("store")
@observer
class List extends PureComponent {
    constructor(){
        super()
        this.state={
            isShow:0
        }
    }
    render() {
        let {isShow} = this.state;
        let { tabList } = this.props.store
        
        return (
            <div>
                {
                    tabList.map((item,index)=>(
                        
                        <button >{item.title}</button>
                       
                    ))
                }
                {
                    tabList.map((item, index) => (
                        <ul key={index} style={{display:isShow===index?"block":"none"}}>
                            {
                                item.content.map((child, index) => (
                                    <li key={index} style={{backgroundColor:child.isRed==="true"?"#f00":"#ccc"}}>
                                        <a href={child.url}>{child.title}</a>
                                        <span>{child.time}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default List