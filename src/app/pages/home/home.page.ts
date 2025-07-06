import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardMetadata } from '../../types';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';

@Component({
  imports: [RouterLink, PlayingCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  route = inject(ActivatedRoute);
  cards: CardMetadata[] = this.route.snapshot.data['cards'] || [];
}
