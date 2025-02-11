import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ).then((m) => m.ChangeDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (m) => m.ControlFlowComponent
          ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-options/defer-options.component'
          ).then((m) => m.DeferOptionsComponent),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (m) => m.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (m) => m.UserComponent
          ),
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () =>
          import('./dashboard/pages/users/users-list.component').then(
            (m) => m.UsersListComponent
          ),
      },
      {
        path: 'view-transition1',
        title: 'View Transition 1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition1.component'
          ).then((m) => m.ViewTransitionComponent),
      },
      {
        path: 'view-transition2',
        title: 'View Transition 2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition2.component'
          ).then((m) => m.ViewTransition2Component),
      },

      {
        path: 'todolist',
        title: 'Todo List',
        loadComponent: () =>
          import('./dashboard/pages/todolist/todo.component').then(
            (m) => m.TodoComponent
          ),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
