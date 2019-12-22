import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
    <App></App>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("渲染成功")
    }
)





/*

ReactDOM.render()
    参数1：需要渲染的元素/组件
    参数2：挂载点
    参数3：回调

    {}解析js语法



    jsx语法中需要注意的地方：
        1、给元素定义类名的时候不能使用class  而需要使用className
        2、label不能在使用for了  而是的使用htmlFor


    React中创建组件的方式
        通过关键字class来创建组件
        React中的Component是所有组件的父类，它是一个构造函数。所以我们需要通过类继承的方式来创建组件
        组件在创建时必须书写render函数，并且返回一个jsx语法


    render：
        生命周期函数

        作用：渲染JSX语法

        只要this.state/this.props发生改变，那么render函数就会执行

    constructor:
        生命周期函数

        特点当你编写constructor的时候必须要书写super，如果不书写super的情况下当前组件的this指向会
        发生错误

        作用：
            用来定义当前组件所需要的一些状态状态存储在this.state中


    React中事件优化
        1、在不需要传递参数的时候我们需要将事件在constructor中提前进行定义。防止render函数多次执行的时候
        耗费性能


        constructor(){
            super()

            this.state = {
                arr:[10,20,30,40],
            }

            this.handleClick = this.handleClick.bind(this);
        }


    this.setState:异步
        用来修改this.state中的数据

        参数：
            1、是一个对象/是一个函数返回一个对象
                this.setState({
                    message:1000
                })


                this.setState((state)=>{
            
                    return {
                        message:1000
                    }
                })

            2、回调
                作用：
                    1、验证数据是否修改成功
                    2、获取数据更新后最新的DOM结构



            
*/


