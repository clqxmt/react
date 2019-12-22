import React,{Component} from "react"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
class List extends Component{
    render(){
        let {tabList,handleDelList} = this.props
        return(
            <div>
                {
                    tabList.map((item,index)=>(
                        <li key={index}>
                            <span>{item}</span>
                            <button onClick={handleDelList.bind(this,index)}>删除</button>
                        </li>
                    ))
                }
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)