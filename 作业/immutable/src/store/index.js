import {createStore} from "redux"

import {combineReducers} from "redux-immutable"
import todo from "./reducers/todo"

const reducers=combineReducers({
    todo
})

const store=createStore(reducers)

export default store