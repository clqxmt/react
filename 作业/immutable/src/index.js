import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"
import {Provider} from "react-redux"

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));


/*
    PureComponent:
        性能优化

        当数据发生改变的时候会执行哪些生命周期

        componentWillRecevieProps
        shouldComponentUpdate
        componentWillUpdate
        render
        componentDidUpdate



        React中所有的性能优化都是为了减少render函数渲染的次数
            render:创建vnode  对比vnode


        作用：
            在内部做了一次浅比较来减少render函数渲染的次数

        注意:
            当使用了PureComponent的时候千万不要使用shouldComponentUpdate，因为如果PureComponent默认会做一次比较，
            而使用了shouldComponentUpdate会导致程序出错

        使用的场景：
            纯组件  UI组件

    shouldComponentUpdate:
        性能优化



    关于this.setState
        1、this.setState是同步还是异步？ 为什么异步？ 什么时候是同步？this.setState中参数的理解


        this.setState是同步还是异步？
            在React的合成事件中是异步的
            而在原生事件或者setTimeout中是同步的


        为什么是异步的？
            在React中的render函数里面会进行虚拟DOM的创建何对比，如果数据发生了改变进行就会执行
            shouldComponentUpdate
            componentWillUpdate
            render
            componentDidUpdate

            如果是同步的那么每次都需要执行这四周生命周期，但是如果是异步的情况下会进行批量更新，那么
            这4个周期执行的次数就会减少


            this.setState会进行批量更新


        参数理解
            1、函数 或者  对象
            2、回调
                验证数据是否修改成功以及获取到数据更新后最新的DOM结构

        


        immutable：
            是一个不可变的数据，只要你对immutable进行修改那么当前immutable就会返回一个新的immutabke对象，
            immutable与深拷贝的不同是immutable不是对数据的节点进行深拷贝，而是采用了数据共享的原理



            深拷贝的危害：
                深拷贝特点耗费性能，因为需要逐层的拷贝对象中的每一个节点


            immutable的问题
                1、学习成本问题
                2、immutable的中的API与原生JS中的API很相似，所以逻辑可能会混乱

*/