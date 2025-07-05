import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    resolve:
  },
  {
    path: 'card/:id',
    loadComponent: () =>
      import('./components/card/card.component').then((m) => m.CardComponent),
  },
];
