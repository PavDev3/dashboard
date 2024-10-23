import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from './../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  standalone: true,
  selector: 'app-defer-options',
  imports: [
    CommonModule,
    HeavyLoadersFastComponent,
    TitleComponent,
    HeavyLoadersSlowComponent,
  ],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export class DeferOptionsComponent {}
