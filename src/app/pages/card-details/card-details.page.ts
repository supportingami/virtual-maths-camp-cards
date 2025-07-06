import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent } from '../../types';

@Component({
  imports: [],
  templateUrl: './card-details.page.html',
  styleUrl: './card-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  route = inject(ActivatedRoute);
  card: CardContent = this.route.snapshot.data['card'];
}
