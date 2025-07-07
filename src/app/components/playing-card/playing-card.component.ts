import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CardMetadata } from '../../types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playing-card',
  styleUrl: 'playing-card.component.scss',
  templateUrl: 'playing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingCardComponent {
  private sanitizer = inject(DomSanitizer);
  /** Card metadata */
  public card = input.required<CardMetadata>();
  /** Sanitized HTML representing main card statement */
  public cardStatement = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.card().statement)
  );
}
