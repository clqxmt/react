import React from "react"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {connect} from "react-redux"
class Add extends React.Component{
    render(){
        let {name,age,sign} = this.props;
        return (
            <div>
                <label>姓名：</label>
                <input type="text" value={name} onChange={this.props.handleChange.bind(this,"name")}/><br/>
                <label>年龄</label>
                <input type="text" value={age} onChange={this.props.handleChange.bind(this,"age")}/><br/>
                <label>个性签名</label>
                <input type="text" value={sign} onChange={this.props.handleChange.bind(this,"sign")}/><br/>
                <button onClick={this.props.handleAdd.bind(this)}>添加</button>
                <button onClick={this.props.handleCancel.bind(this)}>取消</button>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add)