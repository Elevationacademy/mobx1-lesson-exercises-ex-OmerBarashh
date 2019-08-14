import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    checkItem = () => {
        // your code here
    }
    @action addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    } 
}

