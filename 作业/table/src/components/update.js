import React from "react"
import observer from "../observer"
class Update extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: "",
            sign: "",
            index: 0
        }
        observer.$on("handleModify", (params) => {
            this.setState({
                name: params.content.name,
                age: params.content.age,
                sign: params.content.sign,
                index: params.index,
            })
        })
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }
    render() {
        let { name, age, sign }=this.state
        
        return (
            <div>
                姓名：<input type="text" 
                value={name}
                onChange={this.handleChange.bind(this, { type: 'name' })} /><br />
                年龄：<input type="text" 
                value={age}
                onChange={this.handleChange.bind(this, { type: 'age' })} /><br />
                个性签名：<input type="text" 
                value={sign}
                onChange={this.handleChange.bind(this, { type: 'sign' })} /><br />
                <button onClick={this.handleUpdate}>修改</button>
                <button onClick={this.handleCancel}>取消</button>
            </div>
        )
    }
    handleChange(params, e) {
        switch (params.type) {
            case "name":
                this.setState({
                    name: e.target.value
                })
                break;
            case "age":
                this.setState({
                    age: e.target.value
                })
                break;
            case "sign":
                this.setState({
                    sign: e.target.value
                })
                break;
        }
    }

    handleUpdate() {
        observer.$emit("handleUpdated",this.state)
        this.setState({
            name: "",
            age: "",
            sign: ""
        })
        this.props.showUpdate(true)
    }
    handleCancel() {
        this.setState({
            name: "",
            age: "",
            sign: ""
        })
    }
}

export default Update