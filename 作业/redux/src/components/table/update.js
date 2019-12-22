import React from "react"
import store from "../../store"
import {tableInputChangeAction,tableCancelAction,tableUpdateAction} from "../../actions/actionsCreator"
class Update extends React.Component {
    constructor() {
        super()
        this.state =store.getState().table
        store.subscribe(this.handleStateUpdate.bind(this));
    }
    render() {
        let { name, age, sign }=this.state
        
        return (
            <div>
                姓名：<input type="text" 
                value={name}
                onChange={this.handleChange.bind(this, 'name' )} /><br />
                年龄：<input type="text" 
                value={age}
                onChange={this.handleChange.bind(this, 'age' )} /><br />
                个性签名：<input type="text" 
                value={sign}
                onChange={this.handleChange.bind(this, 'sign' )} /><br />
                <button onClick={this.handleUpdate}>修改</button>
                <button onClick={this.handleCancel}>取消</button>
            </div>
        )
    }
    handleChange(category,e){
        let value=e.target.value;
        store.dispatch(tableInputChangeAction(value,category))
    }

    handleUpdate() {
       store.dispatch(tableUpdateAction);
    }
    handleCancel() {
        store.dispatch(tableCancelAction);
    }

    handleStateUpdate(){
        this.setState(store.getState().table)
    }
}

export default Update