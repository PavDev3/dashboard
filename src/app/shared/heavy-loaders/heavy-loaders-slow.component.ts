import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: ` <section [ngClass]="['w-full h-[600px]', cssClass()]">
    Heavy Loader Slow
  </section>`,
})
export class HeavyLoadersSlowComponent {
  cssClass = input<string>('bg-blue-500');

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 1000) {
      // Simulate a heavy computation
    }
  }
}
