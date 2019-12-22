import React from "react"

export default (WrapperComponent)=>{
    return class extends React.Component{
        constructor(){
            super()
        }
        render(){
            
            let {title,...other}=this.props;
            return(
                <div className="pageContainer">
                    <WrapperComponent title></WrapperComponent>
                    <div className="content"></div>

                </div>
            )
        }
    }
}