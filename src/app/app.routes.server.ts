import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { CardService } from './services/card.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'card/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const cardService = inject(CardService);
      const ids = cardService.getIds(); // Assuming this returns ['1', '2', '3']
      return ids.map((id) => ({ id, data: {} as any })); // Generates paths like: /post/1, /post/2, /post/3
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
