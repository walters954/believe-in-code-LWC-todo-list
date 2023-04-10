import { LightningElement } from 'lwc';

export default class TodoList extends LightningElement {

    todoValue = 'test';

    handleClick() {
        console.log('We have clicked the add button');
    }

    handleChange(event) {
        console.log('We have changed a value on the input' , event.target.value);
        this.todoValue = event.target.value;
    }
}