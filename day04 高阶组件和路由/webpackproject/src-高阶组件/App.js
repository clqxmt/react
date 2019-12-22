import React, {Fragment}from "react"
import Person from "./components/person"
import Page from "./components/page"
import Home from "./components/home"
class App extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            
                <Fragment>
                    {/* Person基本语法使用 */}
                    {/* <Person></Person> */}
                    {/* 属性代理 这里是想把值传给page.js，但是page.js是接收不到的，
                    会把值传给pageHoc.js，因为page.js导出的函数时pageHoc.js返回的函数*/}
                    {/* <Page title="猫眼电影" a="1" b="2"></Page> */}
                    <Home></Home>
                </Fragment>
            
        )
    }
}

export default App