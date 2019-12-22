import React from "react"
import PersonHoc from "../hoc/personHoc"
class Person extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>Person组件</div>
        )
    }
}

export default PersonHoc(Person)