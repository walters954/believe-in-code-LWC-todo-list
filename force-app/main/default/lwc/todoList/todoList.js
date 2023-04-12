import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {

    todoValue = 'test';
    todoList = [{
        id: 1,
        value: 'Get Milk'
    }];

    idCounter = 0;

    get hasTodoListItems(){
        return this.todoList.length > 0;
    }

    handleClick() {
        console.log('We have clicked the add button', this.todoList);
        this.idCounter ++;
        let newTodo = {
            id : this.idCounter,
            value : this.todoValue
        }
        this.todoList = [...this.todoList, newTodo];
        this.todoValue = '';
    }

    handleChange(event) {
        console.log('We have changed a value on the input' , event.target.value);
        this.todoValue = event.target.value;
    }

    deleteHandler(event) {
        console.log('deleteHandler from the parent', event.detail);
        const childTodoId = event.detail;
        this.todoList = this.todoList.filter(todo => todo.id !== childTodoId);
    }

    connectedCallback() {
        console.log('connectCallback', this.idCounter);
        this.idCounter = this.todoList.length;
    }

    handleClear() {
        console.log('handleClear');
        this.todoList = [];
    }
}