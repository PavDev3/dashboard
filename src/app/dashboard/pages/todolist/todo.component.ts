import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="container mx-auto p-4 max-w-2xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Lista de Tareas</h1>

      <form [formGroup]="form" class="mb-8" (ngSubmit)="addToDo()">
        <div class="flex gap-2">
          <input
            formControlName="todo"
            placeholder="Agregar nueva tarea..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Agregar
          </button>
        </div>
      </form>

      <ul class="space-y-3">
        @for (todo of toDoList(); track todo) {
        <li
          class="flex items-center gap-3 p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 border border-gray-100"
        >
          <span class="w-4 h-4 rounded-full bg-blue-500"></span>
          <span class="flex-1 text-gray-700">{{ todo }}</span>
          <button
            (click)="removeTodo(todo)"
            class="text-red-500 hover:text-red-600 p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        }
      </ul>

      @if (toDoList().length > 0) {
      <div class="flex justify-end mt-4">
        <button
          (click)="resetTodo()"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Reset lista
        </button>
      </div>
      } @if (toDoList().length === 0) {
      <div class="text-center py-8 text-gray-500">
        No hay tareas pendientes. ¡Agrega una!
      </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  toDoList = signal<string[]>([
    'Buy groceries',
    'Finish Angular course',
    'Learn RxJS',
  ]);

  form = new FormGroup({
    todo: new FormControl(''),
  });

  addToDo() {
    const newTodo = this.form.get('todo')?.value?.trim();
    if (newTodo) {
      this.toDoList.update((todos) => [...todos, newTodo]);
      this.form.reset();
    }
  }

  removeTodo(todo: string) {
    /*
    t representa cada elemento del array todos.
    t !== todo significa que solo mantiene los elementos que no sean iguales a todo.
    Si t === todo, el elemento se excluye del nuevo array.*/
    this.toDoList.update((todos) => todos.filter((t) => t !== todo));
  }

  resetTodo() {
    this.toDoList.set([]);
  }
}
