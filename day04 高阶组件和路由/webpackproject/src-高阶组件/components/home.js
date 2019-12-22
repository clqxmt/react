import React from "react"
import homeHoc from "../hoc/homeHoc";

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:false
        }
    }
    render(){
        return (
            <div>
                <h2>Home页面</h2>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            isLoading:true
        })
        setTimeout(()=>{
            console.log("数据请求完成");
            this.setState({
                isLoading:false
            })
        },2000)
    }
}

export default homeHoc(Home)