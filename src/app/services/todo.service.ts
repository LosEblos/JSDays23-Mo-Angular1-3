import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    console.log('TodoService.constructor');
    this.todos.push({ name: 'Wash clothes', done: false, id: 3 });
    this.todos.push({ name: 'Garten harken', done: false, id: 4 });
  }

  create(todo: Todo) {
    console.log('TodoService.create', todo);
  }

  get(todoId: number) {
    console.log('TodoService.get', todoId);
  }

  getAll(): Todo[] {
    console.log('TodoService.getAll', this.todos);
    return this.todos;
  }

  update(todo: Todo): void {
    console.log('TodoService.update', todo);
  }

  delete(todoId: number): void {
    console.log('TodoService.delete', todoId);
  }
}
