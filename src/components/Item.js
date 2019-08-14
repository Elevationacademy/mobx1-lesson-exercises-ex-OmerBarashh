import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
      @action editItem = (itemName , newLocation) => {
        this.props.store.list[itemName].location = newLocation
      }
      @action deleteItem = (itemName) => {
        let index = this.props.store.list.findIndex(itemName)
        this.props.store.list.splice(index , 1)
      }
      render() {
        let item = this.props.item
        return (
            <div className = {item.completed ? "crossed": null}>
            <input type="checkbox"
                value={item.name}/> 
                {item.name} - {item.location}
            <button onClick = {this.store.deleteItem}>Delete</button>
            </div>)
    }
}


export default Item