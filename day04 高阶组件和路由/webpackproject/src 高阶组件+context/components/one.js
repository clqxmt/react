import React from "react" 
import Two from "./two"
import ContextHoc from "../hoc/contextHoc"
class One extends React.Component{
    render(){
        console.log(this.props,11)
        return (
            <div>
                <h2>One</h2>
                <Two></Two>
                <h3>One---{this.props.username}</h3>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    username:state.username
})
export default ContextHoc(One)(mapStateToProps);