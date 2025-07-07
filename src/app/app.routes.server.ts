import { RenderMode, ServerRoute } from '@angular/ssr';
import { AvailableLanguage } from './types';
import { CARD_DATA } from './data';

/**
 * Specify behaviour required to pre-generate routes during app build
 * This determines all the specific html paths to generate based on card data
 */
export const serverRoutes: ServerRoute[] = [
  // Pre-render language landing pages
  {
    path: ':language',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const languages = Object.keys(CARD_DATA);
      return languages.map((language) => ({ language }));
    },
  },
  // Prerender all card routes
  {
    path: ':language/card/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // Generate all possible routes for known languages and cards,
      // e.g. /en/card/2h , /fr/card/7d
      const allRoutes: { language: AvailableLanguage; id: string }[] = [];
      for (const [language, cardHashmap] of Object.entries(CARD_DATA)) {
        for (const { slug } of Object.values(cardHashmap))
          allRoutes.push({ language: language as AvailableLanguage, id: slug });
      }
      return allRoutes;
    },
  },
  // QR code landing pages use client code to redirect
  {
    path: 'card/:id',
    renderMode: RenderMode.Client,
  },
  // Home page redirect should also be handled by client
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
