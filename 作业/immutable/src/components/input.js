import React,{Component} from "react"
import {connect} from "react-redux"
import {mapStateToProps,mapDispatchToProps} from "./connect"
class Input extends Component{
    render(){
        let {inputVal,handleInputChange,handleAddList} = this.props
        return(
            <div>
                <input type="text" value={inputVal} onChange={handleInputChange.bind(this)} />
                <button onClick={handleAddList.bind(this)}>添加</button>
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Input)