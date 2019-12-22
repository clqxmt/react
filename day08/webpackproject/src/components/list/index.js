import React from "react"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { connect } from "react-redux"
class List extends React.Component {
    render() {
      
        return ( 
            <div>
                <ul>
                    {
                        this.props.tabList.map((item, index) => {
                            return <li key={index} onClick={this.props.handleClickLi.bind(this,item.id)}
                                style={{background:this.props.activeIndex==item.id?'#ccc':''}}
                                >
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.sign}</p>
                                <button onClick={this.props.handleToUpdate.bind(this,index)}>修改</button>
                                <button onClick={this.props.handleDel.bind(this,index)}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)