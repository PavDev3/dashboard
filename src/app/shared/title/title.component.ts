import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">{{ title() }}</h1>`,
})
export class TitleComponent {
  public title = input.required<string>();
}
