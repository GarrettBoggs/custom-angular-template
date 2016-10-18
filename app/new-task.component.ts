import { Component, Output, EventEmitter } from "@angular/core";
import { Task } from "./task.model";

@Component ({
  selector: "new-task",
  template: `
    <h1>Add a New Task</h1>
    <div>
      <label>Add a new Task description</label>
      <input #taskDescription>
      <label>Add a new Task number</label>
      <input #taskId>
      <button (click)="createButtonClicked(taskDescription.value, taskId.value); taskDescription.value=''; taskId.value='';">Create Task</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter()
  createButtonClicked (description: string, id: number) {
    var newTask: Task = new Task (description, id);
    this.newTaskSender.emit(newTask);
    console.log(newTask);
  }
}
