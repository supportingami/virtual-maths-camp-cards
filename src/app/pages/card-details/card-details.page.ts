import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent } from '../../types';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  imports: [PlayingCardComponent, JsonPipe],
  templateUrl: './card-details.page.html',
  styleUrl: './card-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  route = inject(ActivatedRoute);
  // subscribe to route params as same page will reload with different data on lang change
  card = toSignal(this.route.data.pipe(map((v) => v['card'] as CardContent)));
}
