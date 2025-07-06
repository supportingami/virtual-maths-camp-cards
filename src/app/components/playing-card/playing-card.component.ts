import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CardMetadata } from '../../types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playing-card',
  styleUrl: 'playing-card.component.scss',
  templateUrl: 'playing-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Disable view encapsulation to allow generated styles to apply to dynamically rendered content
  // Could alternatively move dynamic content styles to global and keep encapsulation
  encapsulation: ViewEncapsulation.None,
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
