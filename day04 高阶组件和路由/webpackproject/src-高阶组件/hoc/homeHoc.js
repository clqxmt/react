import React from "react"

export default (WrapperComponent)=>{
    return class extends WrapperComponent{
        constructor(){
            super()
        }
        render(){
            if(this.state.isLoading){
                return <div>loading</div>
            }else{
            return <div>{super.render()}</div>
            }
        }
    }
}