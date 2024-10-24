import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.services';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if( user() ) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>

    } @else {
    <p>Loading information...</p>
    }
  `,
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User Info: ${this.user()?.first_name} ${this.user()?.last_name} `;
    }

    return 'User Info';
  });
}
