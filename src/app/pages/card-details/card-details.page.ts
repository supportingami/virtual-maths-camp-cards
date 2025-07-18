import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardContent } from '../../types';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { SafeHtmlPipe } from '../../pipes/safeHtml.pipe';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  imports: [PlayingCardComponent, CardInfoComponent, SafeHtmlPipe, TranslatePipe],
  templateUrl: './card-details.page.html',
  styleUrl: './card-details.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent {
  route = inject(ActivatedRoute);
  // subscribe to route params as same page will reload with different data on lang change
  card = toSignal(this.route.data.pipe(map((v) => v['card'] as CardContent)));


}
