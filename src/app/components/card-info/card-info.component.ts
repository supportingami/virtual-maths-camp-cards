import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { CardContentSection } from '../../types';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card-info',
  templateUrl: 'card-info.component.html',
  styleUrl: 'card-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Display card content in expandable sections for
 * 💡 Hint
 * ☑️ Solution
 * 🧐 Explanation
 * Can be used for main content or extensions
 */
export class CardInfoComponent {
  private sanitizer = inject(DomSanitizer);

  content = input.required<CardContentSection>();
  showStatement = input(false);

  statement = computed(() => this.h(this.content().statement));

  hint = computed(() => this.h(this.content().hint));

  answer = computed(() => this.h(this.content().correct_answer));

  explanation = computed(() => this.h(this.content().explanation));

  /** Convert dynamic html from JSON to SafeHTML for rendering */
  private h(content?: string) {
    if (content) {
      return this.sanitizer.bypassSecurityTrustHtml(content);
    }
    return undefined;
  }
}
