import { LightningElement, api } from 'lwc';

export default class TodoListItem extends LightningElement {

    @api todoValue;
    todoStatus = false;
    
    get isCompleted() {
        return this.todoStatus ? 'strikeText' : '';
    }

    handleComplete() {
        console.log('handleComplete current status: ', this.todoStatus);
        this.todoStatus = !this.todoStatus;
    }
}