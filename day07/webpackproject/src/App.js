import React, { Fragment } from "react"
import store from "./store"
import {getDataAsyncAction} from "./actions/actionsCreator"


class App extends React.Component {
    constructor() {
        super()
        this.state =store.getState()
        store.subscribe(this.handleUpdate.bind(this))
        console.log(this.state);
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick.bind(this)}>获取数据</button>
            </Fragment>

        )
    }

    handleClick(){
        console.log(11);
        store.dispatch(getDataAsyncAction())
    }

    handleUpdate(){
        this.setState(store.getState())
    }
}

export default App