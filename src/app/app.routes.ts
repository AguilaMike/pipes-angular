import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./templates/pages/main-app/main-app.component').then(m => m.MainAppComponent),
    children: [
      { path: '', redirectTo: 'pipes', pathMatch: 'full' },
      { path: 'pipes', loadChildren: () => import('./pipes-app/pipesApp.routing').then(m => m.routes) },
      { path: '**', redirectTo: 'pipes'},
    ],
  },
  { path: '**', redirectTo: '' },
];
