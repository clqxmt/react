import { observable, action } from "mobx"
import moment from "moment"

class Store {
    @observable title = "";
    @observable url = "";
    @observable type = "科技";
    @observable isRed = "true";
    @observable tabList = [
        {
            title: "科技",
            content: []
        },
        {
            title: "娱乐",
            content: []
        },
        {
            title: "财经",
            content: []
        }
    ];


    @action.bound handleChange(category, val) {
        switch (category) {
            case "title":
                this.title = val;
                break;
            case "url":
                this.url = val;
                break;
            case "type":
                this.type = val;
                break;
            case "isRed":
                this.isRed = val;
                break;
        }
    }
    @action.bound handleAddList(){
        this.tabList.map(item=>{
            console.log(item.title,this.title)
            if(item.title===this.type){
                item.content.push({
                    title:this.title,
                    url:this.url,
                    type:this.type,
                    isRed:this.isRed,
                    time:moment().format("YYYY-MM-DD HH:mm:ss")
                })
                
            }
        })
        this.title="";
        this.url="";
    }


}

export default new Store()