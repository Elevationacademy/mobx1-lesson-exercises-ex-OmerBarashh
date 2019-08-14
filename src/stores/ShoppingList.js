import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = () => {
        // your code here
    }
    @action addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }
    @action editItem = (itemName , newLocation) => {
            this.list.find(m => m.name === itemName).location = newLocation
    }
    @action deleteItem = (itemName) => {
            let index = this.list.indexOf(itemName)
            this.list.splice(index , 1)
          }
    } 


