import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {

    todoValue = 'test';
    todoList = [];

    get hasTodoListItems(){
        return this.todoList.length > 0;
    }

    handleClick() {
        console.log('We have clicked the add button', this.todoList);
        let newTodo = {
            id : this.todoList.length + 1,
            value : this.todoValue
        }
        this.todoList = [...this.todoList, newTodo];
        this.todoValue = '';
    }

    handleChange(event) {
        console.log('We have changed a value on the input' , event.target.value);
        this.todoValue = event.target.value;
    }
}