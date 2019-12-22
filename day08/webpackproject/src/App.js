import React, { Fragment } from "react"

import List  from "./components/list"
import Add  from "./components/add"
import Update  from "./components/update"

import { connect } from "react-redux"

class App extends React.Component {
    constructor() {
        super()
        this.state={
            isShow:true
        }
    }
    render() {
        let {isShow} = this.state
        return (
            <Fragment>
               {/* {this.props.isShow?<Add></Add>:<Update></Update>} */}
               {isShow?<Add ></Add>:<Update showActive={this.handleISShow.bind(this)}></Update>}
               <List showActive={this.handleISShow.bind(this)}></List>
            </Fragment>

        )
    }
    handleISShow(params){
        this.setState({
            isShow:params
        })
    }
    
}

const mapStateToProps=(state)=>({
    isShow:state.isShow
})


export default connect(mapStateToProps)(App)