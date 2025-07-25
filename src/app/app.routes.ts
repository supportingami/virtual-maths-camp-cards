import { Routes } from '@angular/router';

import { ResolveFn } from '@angular/router';

import { CARD_DATA } from './data';
import { AvailableLanguage, CardContent } from './types';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

const NOT_FOUND_CARD: Partial<CardContent> = {
  title: 'Not Found',
  _not_found: true,
};

/**
 * When generating routes for /:language/card/:id automatically include
 * card data for the given language and ID.
 */
const cardResolver: ResolveFn<any> = (route) => {
  const id = route.paramMap.get('id')!;
  const language = route.paramMap.get('language') as AvailableLanguage;
  if (language) {
    const meta = CARD_DATA[language][id];
    if (meta) {
      // retrieve full card data from http and merge with metadata
      const http = inject(HttpClient);
      const url = `/assets/card-content/${language}/cards/${id}.json`;
      return http.get(url).pipe(
        map((data) => ({ ...data, ...meta })),
        catchError((e) => {
          console.error(e);
          return of(NOT_FOUND_CARD);
        })
      );
    }
  }

  // If card not retrieved fallback to list page
  return NOT_FOUND_CARD;
};

/**
 * When generating route for /:language include a list of all
 * cards for the given language code
 */
const cardsResolver: ResolveFn<any> = (route) => {
  const language = route.paramMap.get('language') as AvailableLanguage;
  return Object.values(CARD_DATA[language]);
};

/**
 * Handle routing and data to pass to route components
 * This includes looking up card metadata and json as required
 */
export const routes: Routes = [
  // When landing on home route redirect to preferred language page, e.g. /en or /fr
  // Fallback to /en if preferred language not saved
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/language-redirect/language-redirect.page').then(
        (m) => m.LanguageRedirectComponent
      ),
  },
  // Card list page
  // On the /en or /fr page show a list of all cards filtered by language
  {
    path: ':language',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomeComponent),
    resolve: { cards: cardsResolver },
  },
  // `/card/2d` from QR code. Component to redirects to lang version, `/en/card/2d`
  // This is done in component and not redirect to support SSG landing page
  // Important to include this route before next to not treat 'card' as language code
  {
    path: 'card/:id',
    loadComponent: () =>
      import('./pages/language-redirect/language-redirect.page').then(
        (m) => m.LanguageRedirectComponent
      ),
  },
  // Single card display page
  {
    path: ':language/card/:id',
    loadComponent: () =>
      import('./pages/card-details/card-details.page').then(
        (m) => m.CardDetailsComponent
      ),
    resolve: { card: cardResolver },
  },
  // Fallback redirect to home page
  { path: '**', redirectTo: '' },
];
