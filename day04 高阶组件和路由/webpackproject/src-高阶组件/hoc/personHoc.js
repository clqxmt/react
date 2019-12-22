import React from "react"

export default (WrapperComponent)=>{
    return class extends React.Component{
        render(){
            return (
                <div>
                    <WrapperComponent></WrapperComponent>+"Person高阶组件"
                </div>
            )
        }
    }
}