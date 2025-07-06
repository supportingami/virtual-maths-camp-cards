import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent, CardMetadata } from '../../types';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';

@Component({
  imports: [PlayingCardComponent],
  templateUrl: './card-details.page.html',
  styleUrl: './card-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  route = inject(ActivatedRoute);
  card: CardContent = this.route.snapshot.data['card'];
  meta: CardMetadata = this.route.snapshot.data['meta'];
}
