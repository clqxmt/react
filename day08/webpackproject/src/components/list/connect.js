
import {listDelAction,listToUpdateAction,listClickLiAction} from "../../actions/actionsCreator"
export const mapStateToProps =(state)=>({
    tabList:state.tabList,
    activeIndex:state.activeIndex
})

export const mapDispatchToProps = (dispatch)=>({
    handleDel(index,e){
        e.stopPropagation()
        dispatch(listDelAction(index))
    },
    handleToUpdate(index,e){
        e.stopPropagation();
        this.props.showActive(false)
        dispatch(listToUpdateAction(index))
       
    },
    handleClickLi(id){
        dispatch(listClickLiAction(id))
    }
})