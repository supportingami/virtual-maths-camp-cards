import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { CardContentSection } from '../../types';
import { SafeHtmlPipe } from '../../pipes/safeHtml.pipe';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationStringCode } from '../../data';

interface ContentTab {
  icon: string;
  heading: TranslationStringCode,
  content: string
}

@Component({
  selector: 'app-card-info',
  templateUrl: 'card-info.component.html',
  styleUrl: 'card-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SafeHtmlPipe, TranslatePipe,]
})
/**
 * Display card content in expandable sections for
 * 💡 Hint
 * ☑️ Solution
 * 🧐 Explanation
 * Can be used for main content or extensions
 */
export class CardInfoComponent {

  public activeTabIndex = signal(-1)

  public content = input.required<CardContentSection>();


  public tabs = computed(() => this.generateTabs(this.content()))

  public activeContent = computed(() => {
    const activeIndex = this.activeTabIndex()
    if (activeIndex > -1) {
      return this.tabs()[activeIndex]?.content
    }
    return undefined
  })

  public showContent = signal(true)

  public async toggleSection(index: number) {
    this.showContent.set(false)
    if (this.activeTabIndex() === index) {
      this.activeTabIndex.set(-1)
      return
    }
    this.activeTabIndex.set(index)
    setTimeout(() => {
      this.showContent.set(true)

    }, 50);

  }



  private generateTabs(content: CardContentSection,) {
    const tabs: ContentTab[] = []

    const { hint, correct_answer, explanation } = content

    if (hint) {
      tabs.push({ icon: '💡', heading: 'HINT', content: hint })
    }
    if (correct_answer) {
      tabs.push({ icon: '☑️', heading: 'SOLUTION', content: correct_answer })
    }
    if (explanation) {
      tabs.push({ icon: '🧐', heading: 'EXPLANATION', content: explanation })
    }

    return tabs

  }
}
