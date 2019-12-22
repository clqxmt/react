

export const mapStateToProps=(state)=>({
    inputVal:state.getIn(["todo","inputVal"]),
    tabList:state.getIn(["todo","tabList"])
})

export const mapDispatchToProps=(dispatch)=>({
    handleInputChange(e){
        let val = e.target.value;
        dispatch({
            type:"INPUT_CHANGE",
            value:val
        })
    },
    handleAddList(){
        dispatch({
            type:"ADD_LIST"
        })
    },
    handleDelList(index){
        dispatch({
            type:"DEL_LIST",
            index
        })
    }
})