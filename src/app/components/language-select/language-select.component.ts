import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { LANGUAGES_HASHMAP } from '../../data/languages';
import { TranslateService } from '../../services/translate.service';


@Component({
  selector: 'app-language-select',
  templateUrl: 'language-select.component.html',
  styleUrl: './language-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class LanguageSelectComponent {
  public languageOptions = Object.values(LANGUAGES_HASHMAP)

  private translateService = inject(TranslateService)

  public selectedLanguage = computed(() => this.translateService.language())

  private router = inject(Router);

  /** When changing language redirect to url for language pages */
  public handleLanguageSelect(language: string) {
    const previousLanguage = this.selectedLanguage();
    // replace lang code in current path and navigate to updated lang path
    const currentPath = this.router.url;
    const p = currentPath.replace(`/${previousLanguage}`, `/${language}`);
    this.router.navigateByUrl(p, { replaceUrl: true });

  }
}
