import React, { Fragment } from "react"
import { HashRouter, Route, Link, NavLink, Redirect, Switch } from "react-router-dom"

import routeEach from "./utils/routeEach"
import {routeConfig} from "./router"



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
                    <Redirect from="/" to="/movie" exact></Redirect>
                    {routeEach(routeConfig)}
                </Switch>
            </HashRouter>

        )
    }
}

export default App