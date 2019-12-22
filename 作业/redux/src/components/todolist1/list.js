import React from "react"

import store from "../../store"

class List extends React.Component {
    constructor() {
        super()
        let { tabList } = store.getState().todolist1;

        this.state = {
            tabList,
            showIndex: 0
        }

        store.subscribe(this.handleUpdate.bind(this))

    }

    render() {
        let { tabList, showIndex } = this.state

        return (
            <div>
                {
                    tabList.map((item, index) => {
                        return <button key={index}
                            style={{ background: showIndex == index ? '#f00' : '', outline: 'none' }}
                            onClick={this.handleClick.bind(this, index)}>{item.title}</button>
                    })
                }
                <hr />
                {
                    tabList.map((item, index) => {
                        return <ul key={index} style={{ display: showIndex == index ? 'block' : 'none' }}>
                            {
                                item.content.map((item, index) => {
                                    return <li key={index} style={{ background: item.isRed ? '#f00' : '#eee' }}>
                                        <a href={item.url} style={{ float: 'left' }}>{item.title}</a>
                                        <span style={{ float: 'right' }}>{item.time}</span>
                                    </li>
                                })
                            }
                        </ul>
                    })
                }

            </div>
        )
    }

    handleClick(index) {

        this.setState({
            showIndex: index
        })

    }
    handleUpdate() {
        let { tabList } = store.getState().todolist1
        this.setState({
            tabList
        })
    }
}

export default List