import React, { Fragment } from "react"
import { HashRouter, Route, Link, NavLink, Redirect, Switch } from "react-router-dom"
import Home from "./pages/home"
import List from "./pages/list"
// import Order from "./pages/order"
import Mine from "./pages/mine"
import Detail from "./pages/detail"
import HotMovie from "./pages/hotmovie"
import CommingMovie from "./pages/commingmovie"
import HotABC from "./pages/hotabc"
import Loadable from "react-loadable"
import Loading from "./components/loading"

const Order=Loadable({
    loader:()=>import("./pages/order"),
    loading:Loading
})
class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect from="/" to="/home" exact></Redirect>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/order" component={Order} />
                    <Route path="/mine" component={Mine} />
                    {/* <Route path="/detail/:id/:name" component={Detail}/> */}
                    {/* <Route path="/detail" component={Detail}/> */}
                </Switch>

                {/* //路由跳转 */}
                {/* <a href="#/home">首页</a>
                <a href="#/list">列表</a>
                <a href="#/order">订单</a>
                <a href="#/mine">我的</a> */}
                {/* <Link to="/home">首页</Link>
                <Link to="/list">列表</Link>
                <Link to="/order">订单</Link>
                <Link to="/mine">我的</Link> */}
                <NavLink to="/home" activeClassName="Home">首页</NavLink>
                <NavLink to="/list" activeStyle={{color:"#f00",fontSize:"30px"}}>列表</NavLink>
                <NavLink to="/order">订单</NavLink>
                <NavLink to="/mine">我的</NavLink>
                {/* <NavLink to="/detail/1/lxt">详情</NavLink> */}
                <NavLink to="/detail?id=1&name=lxt">详情</NavLink>


                 <Route path="/home" render={()=>{
                    return (
                        <Fragment>
                            <Redirect from="/home" to="/home/hotmovie"></Redirect>
                            <Route path="/home" componen={Home} ></Route>
                            <Switch>
                                <Route path="/home/hotmovie" exact component={HotMovie}></Route>
                                <Route path="/home/commingmovie" component={CommingMovie}></Route>
                                <Route path="/home/hotmovie/abc" component={HotABC}></Route>
                            </Switch>
                        </Fragment>
                    )
                }}/>
                {/*<Route path="/list" render={()=>{
                    return <List></List>
                }}/>
                <Route path="/order" render={()=>{
                    return <Order></Order>
                }}/>
                <Route path="/mine" render={()=>{
                    return <Order></Order>
                }}/> */}
                <Route path="/detail" render={(props)=>{
                    return <Detail {...props}></Detail>
                }}/>
                
            </HashRouter>

        )
    }
}

export default App