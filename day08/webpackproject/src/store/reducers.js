
import { inputChange, listAdd, listCancel, listDel, listToUpdate,listUpdate,listActive } from "../actions/actionTypes"

const defaultState = {
    name: "",
    age: "",
    sign: "",
    tabList: [],
    isShow: true,
    activeIndex: -1,
    index:0
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case inputChange:
            let inputState = Object.assign({}, state);
            switch (action.category) {
                case "name":
                    inputState.name = action.value;
                    break;
                case "age":
                    inputState.age = action.value;
                    break;
                case "sign":
                    inputState.sign = action.value;
                    break;
            }
            return inputState;
        case listAdd:
            var listState = JSON.parse(JSON.stringify(state));
            listState.tabList.push({
                name: listState.name,
                age: listState.age,
                sign: listState.sign,
                id:new Date().getTime()
            })
            listState.name = "";
            listState.age = "";
            listState.sign = "";
            return listState;
        case listDel:
            var listState = JSON.parse(JSON.stringify(state));
            listState.tabList.splice(action.index, 1);
            return listState;
        case listToUpdate:
            var listState = JSON.parse(JSON.stringify(state));
            listState.name = listState.tabList[action.index].name;
            listState.age = listState.tabList[action.index].age;
            listState.sign = listState.tabList[action.index].sign;
            // listState.isShow = false;
            listState.index=action.index;
            return listState;
        case listCancel:
            var listState = JSON.parse(JSON.stringify(state));
            listState.name = "";
            listState.age = "";
            listState.sign = "";
            return listState;
        case listUpdate:
            var listState = JSON.parse(JSON.stringify(state));
            listState.tabList[listState.index].name=listState.name;
            listState.tabList[listState.index].age=listState.age;
            listState.tabList[listState.index].sign=listState.sign;
            listState.name="";
            listState.age="";
            listState.sign="";
            // listState.isShow=true;
            return listState;
        case listActive:
            var listState = JSON.parse(JSON.stringify(state));
            listState.activeIndex=action.id;
            return listState;
    }
    return state;
}