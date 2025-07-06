import { Routes } from '@angular/router';

import { ResolveFn } from '@angular/router';

import { CARD_DATA } from './data';
import { AvailableLanguage } from './types';

/**
 * When generating routes for /:language/card/:id automatically include
 * card data for the given language and ID.
 */
const cardResolver: ResolveFn<any> = (route) => {
  const id = route.paramMap.get('id')!;
  const language = route.paramMap.get('language') as AvailableLanguage;
  if (language) {
    const card = CARD_DATA[language][id];
    if (card) {
      return card;
    }
  }

  // If card not retrieved fallback to list page
  return { title: 'Not Found', notFound: true };
};

/**
 * When generating route for /:language include a list of all
 * cards for the given language code
 */
const cardsResolver: ResolveFn<any> = (route) => {
  const language = route.paramMap.get('language') as AvailableLanguage;
  return Object.values(CARD_DATA[language]);
};

export const routes: Routes = [
  // When landing on home route redirect to preferred language page, e.g. /en or /fr
  // Fallback to /en if preferred language not saved
  {
    path: '',
    pathMatch: 'full',
    redirectTo: (route) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        const lang = window.localStorage.getItem('language') || 'en';
        return `/${lang}`;
      }
      return '/en';
    },
  },
  // Card list page
  // On the /en or /fr page show a list of all cards filtered by language
  {
    path: ':language',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    resolve: { cards: cardsResolver },
  },
  // Pages linked by QR codes do not include language, e.g. /card/2h
  // Apply redirect to include preferred language with fallback, e.g. /en/card/2h
  // Important to include this route before next to not treat 'card' as language code
  {
    path: 'card/:id',
    resolve: { card: cardResolver },
    redirectTo: (route) => {
      const id = route.params['id'];
      if (typeof window !== 'undefined' && window.localStorage) {
        const lang = window.localStorage.getItem('language') || 'en';
        return `/${lang}/card/${id}`;
      }
      return `/en/card/${id}`;
    },
  },
  // Single card display page
  {
    path: ':language/card/:id',
    loadComponent: () =>
      import('./components/card/card.component').then((m) => m.CardComponent),
  },
  // Fallback redirect to home page
  { path: '**', redirectTo: '' },
];
