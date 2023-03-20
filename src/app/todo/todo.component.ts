import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  @Output() done = new EventEmitter<any>();

  colorToBind = 'blue';

  constructor() {}

  ngOnInit() {}

  markTodoAsDone() {
    this.done.emit(this.todo);
  }
}
