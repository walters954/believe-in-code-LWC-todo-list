import { LightningElement, api } from 'lwc';

export default class TodoListItem extends LightningElement {

    @api todoValue;
    @api todoId;
    todoStatus = false;
    
    get isCompleted() {
        return this.todoStatus ? 'strikeText' : '';
    }

    handleComplete() {
        console.log('handleComplete current status: ', this.todoStatus);
        this.todoStatus = !this.todoStatus;
    }

    handleDelete() {
        console.log('handleDelete from child', this.todoId);
        const deleteEvent = new CustomEvent('delete', {
            detail: this.todoId
        });
        this.dispatchEvent(deleteEvent);

    }
}