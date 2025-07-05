import { Routes } from '@angular/router';

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CardService } from './services/card.service';

const cardResolver: ResolveFn<any> = (route) => {
  const cardService = inject(CardService);
  const id = route.paramMap.get('id')!;
  console.log('resolving card', id, cardService.getById(id));
  return cardService.getById(id);
};

const cardsResolver: ResolveFn<any> = () => {
  const cardService = inject(CardService);
  return cardService.getAll('en');
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    resolve: { cards: cardsResolver },
  },
  {
    path: 'card/:id',
    loadComponent: () =>
      import('./components/card/card.component').then((m) => m.CardComponent),
    resolve: { card: cardResolver },
  },
];
