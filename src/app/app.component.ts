import { Component, ElementRef } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todoObject = { name: 'Wash clothes', done: false, id: 3 };
  public show = true;
  todos = [];

  constructor(
    private readonly elementRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('elementRef from constructor', elementRef);

    this.todos = todoService.getAll();
  }

  catchDoneEvent(todo: any) {
    console.log(todo);
  }

  logElementRef() {
    console.log('elementRef from console as property', this.elementRef);
  }

  toggle() {
    this.show = !this.show;
  }
}
