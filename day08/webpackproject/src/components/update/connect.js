
import {inputChangeAction,listCancelAction,listUpdateAction} from "../../actions/actionsCreator"
export const mapStateToProps=(state)=>({
    name:state.name,
    age:state.age,
    sign:state.sign,
})


export const mapDispatchToProps=(dispatch)=>({
    handleChange(category,e){
        let val=e.target.value;
        dispatch(inputChangeAction(category,val))
    },
    handleCancel(){
        dispatch(listCancelAction)
    },
    handleUpdate(){
        this.props.showActive(true)
        dispatch(listUpdateAction)
    }
})