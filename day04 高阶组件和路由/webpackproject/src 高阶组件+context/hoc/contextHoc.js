import React from "react"
import {Consumer} from "../utils/globalContext"
export default (WrapperComponent)=>(mapStateToProps)=>{
    return class extends React.Component{
        render(){
            return (
                <Consumer>
                    {
                        (props)=>{
                            
                            let state = mapStateToProps(props)
                            console.log(state,222)
                            return (
                                <WrapperComponent {...state}></WrapperComponent>
                            )
                        }
                    }
                </Consumer>
            )
        }
    }
}