import React from "react"
import store from "../../store"
import {tableToUpdateAction,tableDelAction,tableClickLiAction} from "../../actions/actionsCreator"
class List extends React.Component {
    constructor() {
        super()
        this.state = store.getState().table;
        store.subscribe(this.handleStateUpdate.bind(this));
    }
    render() {
        let { userList, showIndex } = this.state
        
        return (
            <div>

                <ul>
                    {
                        userList.map((item, index) => {
                            return <li style={{ background: showIndex == index ? '#ccc' : '#fff' }} key={index} onClick={this.handleClickLi.bind(this, index)}>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.sign}</p>
                                <button onClick={this.handleUpdate.bind(this, index)}>修改</button>
                                <button onClick={this.handleRemove.bind(this, index)}>删除</button>
                            </li>
                        })
                    }
                </ul>

            </div>
        )
    }
    handleUpdate(index,e) {
        e.stopPropagation();
      store.dispatch(tableToUpdateAction(index));
    }
    handleRemove(index) {
        store.dispatch(tableDelAction(index));
    }
    handleClickLi(index) {
        store.dispatch(tableClickLiAction(index));
    }
    handleStateUpdate(){
        this.setState(store.getState().table);
    }
}

export default List