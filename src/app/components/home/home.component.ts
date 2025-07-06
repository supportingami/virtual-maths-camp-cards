import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardMetadata } from '../../types';

@Component({
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  route = inject(ActivatedRoute);
  cards: CardMetadata[] = this.route.snapshot.data['cards'] || [];
}
