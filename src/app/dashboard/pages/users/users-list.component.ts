import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';
import { UsersService } from './../../../services/users.services';

@Component({
  standalone: true,
  selector: 'app-users-list',
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users-list.component.html',
  styles: ``,
})
export class UsersListComponent {
  readonly UsersService = inject(UsersService);
}
