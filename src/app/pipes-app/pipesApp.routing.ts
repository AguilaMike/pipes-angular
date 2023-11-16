import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/basic-page/basic-page.component').then(m => m.BasicPageComponent) },
  { path: 'numbers', loadComponent: () => import('./pages/numbers-page/numbers-page.component').then(m => m.NumbersPageComponent) },
  { path: 'uncommon', loadComponent: () => import('./pages/uncommon-page/uncommon-page.component').then(m => m.UncommonPageComponent) },
  { path: 'custom', loadComponent: () => import('./pages/other-page/other-page.component').then(m => m.OtherPageComponent) },
  { path: '**', redirectTo: ''},
];
