import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [DashboardComponent, CommonModule],
  template: ` <section [ngClass]="['w-full', cssClass()]">
    <ng-content />
  </section>`,
})
export class HeavyLoadersFastComponent {
  cssClass = input<string>();
}
