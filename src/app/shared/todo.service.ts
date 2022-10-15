import { Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo("Go to gym", false),
    new Todo("Dinner", true)
  ]

  storageListenSub: Subscription

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if (event.key === 'todos') this.loadState()
    })
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
    this.saveState()
  }

  updateTodo(id: string, updateTodoFields: Partial<Todo>) {
    const todo = this.todos.find(t => t.id === id)
    Object.assign(todo, updateTodoFields)
    this.saveState()
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if (index == -1) return
    this.todos.splice(index, 1)
    this.saveState()
  }

  saveState() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  loadState() {
    try {
      const todosInStorage = JSON.parse(localStorage.getItem("todos"));
      if (todosInStorage) {
        this.todos.length = 0;
        this.todos.push(...todosInStorage)
      }
    } catch (error) {
      console.log(`There was an error retrieving the todos from localStorage`);
    }
  }
}
