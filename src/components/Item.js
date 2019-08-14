import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => {
        //your code here
      }
     editItem = (e) =>{
        let newLoc = prompt('Please enter a new location')
        this.props.store.editItem( this.props.item.name, newLoc)
     }
      
      deleteItem = () => {
       this.props.store.deleteItem(this.props.item.name)
      }
      render() {
        let item = this.props.item
        return (
            <div className = {item.completed ? "crossed": null}>
            <input type="checkbox"
                value={item.name}/> 
             < div onClick={this.editItem} value = {item.name}>   {item.name} - {item.location}</div>
            <button onClick = {this.deleteItem}>Delete</button>
            </div>)
    }
}


export default Item