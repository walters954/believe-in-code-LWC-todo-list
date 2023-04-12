import { LightningElement, api } from 'lwc';

export default class TodoListItem extends LightningElement {

    @api todoValue;
    @api todoId;
    todoStatus = false;
    
    get isCompleted() {
        return this.todoStatus ? 'strikeText' : '';
    }

    handleComplete() {
        this.todoStatus = !this.todoStatus;
    }

    handleDelete() {
        const deleteEvent = new CustomEvent('delete', {
            detail: this.todoId
        });
        this.dispatchEvent(deleteEvent);
    }
}