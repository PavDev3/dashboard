import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  selector: 'app-change-detection',
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="currentFramework()" />

    <pre>
    {{ frameworkAsSignal() | json }}
  </pre
    >

    <pre>
      {{ frameworkAsProperty | json }}
    </pre
    >
  `,
})
export class ChangeDetectionComponent {
  public currentFramework = computed(() => {
    return `Current Framework: ${this.frameworkAsSignal().name}`;
  });

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update((framework) => {
        return {
          ...framework,
          name: 'React',
        };
      });
      console.log('frameworkAsSignal updated');
    }, 3000);
  }
}
