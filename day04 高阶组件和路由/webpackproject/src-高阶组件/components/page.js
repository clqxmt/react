import React from "react"
import "./page.css"
import PageHoc from "../hoc/pageHoc"
class Page extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log(this)
        return(
            
            <div className="header">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default PageHoc(Page)