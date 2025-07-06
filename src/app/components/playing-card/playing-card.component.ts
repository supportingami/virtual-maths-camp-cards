import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CardMetadata } from '../../types';

@Component({
  selector: 'app-playing-card',
  styleUrl: 'playing-card.component.scss',
  templateUrl: 'playing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingCardComponent {
  public card = input.required<CardMetadata>();
}
