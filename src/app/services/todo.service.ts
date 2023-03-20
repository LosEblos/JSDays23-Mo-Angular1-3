import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  constructor() {}

  create(todo: Todo) {}

  get(todoId: number) {}

  getAll(): Todo[] {
    return this.todos;
  }

  update(todo: Todo): void {}

  delete(todoId: number): void {}
}
