import { tableInputChange, tableAdd, tableDel, tableCancel, tableToUpdate, tableUpdate,tableClickLi } from "../../actions/actionTypes"


const defaultState = {
    name: "",
    age: "",
    sign: "",
    index: 0,
    userList: [],
    showIndex: -1,
    isShow:true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case tableInputChange:
            let inputState = JSON.parse(JSON.stringify(state));
            switch (action.category) {
                case "name":
                    inputState.name = action.value
                    break;
                case "age":
                    inputState.age = action.value
                    break;
                case "sign":
                    inputState.sign = action.value
                    break;
            }
            return inputState;
        case tableAdd:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.userList.push({
                name:tableState.name,
                age:tableState.age,
                sign:tableState.sign,
            })
            tableState.name="";
            tableState.age="";
            tableState.sign="";
            return tableState;
        case tableDel:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.userList.splice(action.index,1);
            tableState.showIndex=-1;
            return tableState;
        case tableCancel:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.name="";
            tableState.age="";
            tableState.sign="";
            return tableState;
        case tableToUpdate:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.isShow=false;
            tableState.name=tableState.userList[action.index].name;
            tableState.age=tableState.userList[action.index].age;
            tableState.sign=tableState.userList[action.index].sign;
            tableState.index=action.index;
            return tableState;
        case tableUpdate:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.userList[tableState.index].name=tableState.name;
            tableState.userList[tableState.index].age=tableState.age;
            tableState.userList[tableState.index].sign=tableState.sign;
            tableState.name="";
            tableState.age="";
            tableState.sign="";
            tableState.isShow=true;
            return tableState;
        case tableClickLi:
            var tableState = JSON.parse(JSON.stringify(state));
            tableState.showIndex=action.index;
            return tableState;
    }
    return state;
}