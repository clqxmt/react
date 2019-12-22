import React from "react"

import store from "../../store"

class ListTwo extends React.Component {
    constructor() {
        super()
        

        this.state =store.getState().todolist2;

        store.subscribe(this.handleUpdate.bind(this))

    }

    render() {
        let { tabList} = this.state

        return (
            <div>
                {
                    tabList.map((item, index) => {
                        
                        return <li key={index}>
                            <span>[ {item.type} ]</span>
                            <a href={item.url} style={{color: item.isRed ? '#f00' : '' }}>{item.title}</a>
                            <span style={{ float: 'right' }}>{item.time}</span>
                        </li>
                              
                    })
                }

            </div>
        )
    }

    handleUpdate() {
        
        this.setState(store.getState().todolist2);
    }
}

export default ListTwo