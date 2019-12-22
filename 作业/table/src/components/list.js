import React from "react"
import observer from "../observer"

class List extends React.Component {
    constructor() {
        super()
        this.state = {
            userList: [],
            showIndex: -1

        }
        observer.$on("handleAddData", (params) => {
            let userList=this.state.userList;
            userList.push(params);
            this.setState({
                userList
            })
        })
        observer.$on("handleUpdated", (params) => {
            let userList=this.state.userList;
            userList.map((item,index)=>{
                if(index==params.index){
                    item.name=params.name;
                    item.age=params.age;
                    item.sign=params.sign
                }
            })
            
            this.setState({
                userList:userList
            })

        })
    }
    render() {
        let { userList, showIndex } = this.state
        // console.log(userList)
        return (
            <div>

                <ul>
                    {
                        userList.map((item, index) => {
                            return <li style={{ background: showIndex == index ? '#ccc' : '#fff' }} key={index} onClick={this.handleClickLi.bind(this, index)}>
                                <p>{item.name}</p>
                                <p>{item.age}</p>
                                <p>{item.sign}</p>
                                <button onClick={this.handleUpdate.bind(this, index)}>修改</button>
                                <button onClick={this.handleRemove.bind(this, index)}>删除</button>
                            </li>
                        })
                    }
                </ul>

            </div>
        )
    }
    handleUpdate(index,e) {
        e.stopPropagation();
        //点击修改时给App组件传一个值让add隐藏update显示
        this.props.showUpdate(false);
        //把需要修改的原信息给update组件传过去
        observer.$emit("handleModify", { content: this.state.userList[index], index: index });
    }
    handleRemove(index) {
        this.state.userList.splice(index, 1)
    }
    handleClickLi(index) {
        this.setState({
            showIndex: index
        })
    }
}

export default List