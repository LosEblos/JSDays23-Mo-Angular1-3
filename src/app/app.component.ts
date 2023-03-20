import { Component, ElementRef } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todoObject = { name: 'Wash clothes', done: false, id: 3 };

  constructor(
    private readonly elementRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('elementRef from constructor', elementRef);

    console.log(todoService.getAll());
  }

  catchDoneEvent(todo: any) {
    console.log(todo);
  }

  logElementRef() {
    console.log('elementRef from console as property', this.elementRef);
  }
}
