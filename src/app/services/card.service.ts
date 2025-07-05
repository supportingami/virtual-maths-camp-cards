import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor() {}

  public getAll(language: 'en' | 'fr') {
    return [];
  }

  public getIds() {
    return ['id_1', 'id_2'];
  }

  public getById(id: string) {
    return { title: `card ${id}` };
  }
}
