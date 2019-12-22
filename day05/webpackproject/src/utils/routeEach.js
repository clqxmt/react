//遍历路由表

import React,{Fragment} from "react"

import {Route,Switch,Redirect} from "react-router-dom"

export default (routes)=>{
    //判断是否需要登录
    function isLogin(config){
        if(config.path != "/login" && config.meta.requiredAuth){
            if(localStorage.getItem("token")){
                if(config.children){
                    return childrenMap(config)
                }else{
                    return <config.component/>
                }
            }else{
                return <Redirect to="/login"/>
            }
        }else{
            return <config.component></config.component>
        }
    }
    
    //遍历子级路由,childNodes是子级路由的父级路由
    function childrenMap(childNodes){
        return(
            <Route path={childNodes.path} render={()=>{
                return (
                    <Fragment>
                        <Route component={childNodes.component}></Route>
                        <Switch>
                            {
                                childNodes.children.map((child)=>{
                                    return (
                                        <Route path={child.path} key={child.path} render={()=>{
                                            return isLogin(child);
                                        }}/>
                                    )
                                })
                            }
                            <Redirect from={childNodes.path} to={childNodes.children[0]}></Redirect>
                        </Switch>
                    </Fragment>
                )
            }} />
        )
    }


    //遍历路由
    return routes.map(item=>{
        return <Route path={item.path} key={item.path} render={()=>{
            return isLogin(item);//判断一下是否需要登录
        }}/>
    })
}


