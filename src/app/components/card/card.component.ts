import {
  ChangeDetectionStrategy,
  Component,
  inject,
  REQUEST,
} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  constructor() {
    const request = inject(REQUEST);
    console.log(request?.url);
  }
}
