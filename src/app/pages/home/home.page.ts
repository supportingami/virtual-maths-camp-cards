import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardMetadata } from '../../types';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  imports: [RouterLink, PlayingCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  route = inject(ActivatedRoute);

  // subscribe to route params as same page will reload with different data on lang change
  cards = toSignal(
    this.route.data.pipe(map((v) => v['cards'] as CardMetadata[]))
  );
}
