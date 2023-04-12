import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {

    todoValue = '';
    todoList = [];

    idCounter = 0;

    get hasTodoListItems(){
        return this.todoList.length > 0;
    }

    handleClick() {
        this.idCounter ++;
        let newTodo = {
            id : this.idCounter,
            value : this.todoValue
        }
        this.todoList = [...this.todoList, newTodo];
        this.todoValue = '';
    }

    handleChange(event) {
        this.todoValue = event.target.value;
    }

    deleteHandler(event) {
        const childTodoId = event.detail;
        this.todoList = this.todoList.filter(todo => todo.id !== childTodoId);
    }

    connectedCallback() {
        this.idCounter = this.todoList.length;
    }

    handleClear() {
        this.todoList = [];
    }
}