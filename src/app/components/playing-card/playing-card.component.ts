import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { CardMetadata } from '../../types';
import { SafeHtmlPipe } from '../../pipes/safeHtml.pipe';

@Component({
  selector: 'app-playing-card',
  styleUrl: 'playing-card.component.scss',
  templateUrl: 'playing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SafeHtmlPipe]
})
export class PlayingCardComponent {
  /** Card metadata */
  public card = input.required<CardMetadata>();

}
