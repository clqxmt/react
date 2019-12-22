
import {getData} from "../actions/actionTypes"

const defaultState = {
    movieList:[]
}

export default (state=defaultState,action)=>{
    console.log(action)
    switch(action.type){
        case getData:
           
            let movieListState = JSON.parse(JSON.stringify(state));
            movieListState.movieList=action.data;
            return movieListState;
    }
    return state;
}