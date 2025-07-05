import { Routes } from '@angular/router';

import { ResolveFn } from '@angular/router';
import { ALL_CARDS_BY_LANGUAGE } from './utils/data.utils';

const cardResolver: ResolveFn<any> = (route) => {
  const id = route.paramMap.get('id')!;
  return ALL_CARDS_BY_LANGUAGE.en[id] || { title: 'Not Found' };
};

const cardsResolver: ResolveFn<any> = () => {
  return Object.values(ALL_CARDS_BY_LANGUAGE.en);
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/language-select/language-select.component').then(
        (m) => m.LanguageSelectComponent
      ),
  },
  {
    path: ':language',
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
