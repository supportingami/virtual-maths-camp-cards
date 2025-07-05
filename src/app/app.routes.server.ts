import { RenderMode, ServerRoute } from '@angular/ssr';
import { ALL_CARD_IDS } from './utils/data.utils';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'card/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return ALL_CARD_IDS.map((id) => ({ id })); // Generates paths like: /post/1, /post/2, /post/3
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
