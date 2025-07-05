import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CardService {
  constructor() {}

  public getIds() {
    return ['id_1', 'id_2'];
  }
}
