import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';
@Component({
  standalone: true,
  selector: 'app-control-flow',
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export class ControlFlowComponent {
  public showContent = signal(false);

  public grade = signal<Grade>('A');

  public toggleContent() {
    this.showContent.update((value) => !value);
    this.grade.update((value) => {
      if (value === 'A') return 'B';
      if (value === 'B') return 'F';
      return 'A';
    });
  }

  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameworks2 = signal([]);
}
