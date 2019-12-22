import { tabinputChange, tablistAdd } from "../../actions/actionTypes"

const defaultState = {
    title: "",
    url: "",
    type: "科技",
    isRed: "true",
    tabList: []
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case tabinputChange:
            let inputState = JSON.parse(JSON.stringify(state))

            switch (action.category) {
                case "title":
                    inputState.title = action.value;
                    break;
                case "type":
                    inputState.type = action.value;
                    break;
                case "url":
                    inputState.url = action.value;
                    break;
                case "isRed":
                    inputState.isRed = action.value;
                    break;
            }
            return inputState;

        case tablistAdd:
            let tabListState = JSON.parse(JSON.stringify(state));
            tabListState.tabList.push({
                title:tabListState.title,
                url:tabListState.url,
                type:tabListState.type,
                isRed:tabListState.isRed,
                time:action.time
            })
            return tabListState;
    }
    return state;
}