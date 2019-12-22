import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./store"

import { Provider } from "mobx-react"

const stores = {
    store
}


ReactDOM.render(
    <Provider {...stores}>
        <App></App>
    </Provider>
    , document.getElementById('root'));


/*
    mobx:公共状态管理模式

        特点：
            会将公共状态转换成一些可被观察的对象(vue data)


    yarn add mobx mobx-react

*/

