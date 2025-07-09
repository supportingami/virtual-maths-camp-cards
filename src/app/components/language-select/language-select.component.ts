import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { AvailableLanguage } from '../../types';
import { Router } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

const LANGUAGES_HASHMAP: Record<AvailableLanguage, string> = {
  en: 'English',
  fr: 'French',
};

@Component({
  selector: 'app-language-select',
  templateUrl: 'language-select.component.html',
  styleUrl: './language-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class LanguageSelectComponent implements OnInit {
  public languageOptions = Object.entries(LANGUAGES_HASHMAP).map(
    ([value, label]) => ({ value, label })
  );
  public selectedLanguage = signal<AvailableLanguage>('en');
  private router = inject(Router);

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const language = window.localStorage.getItem('language');
      if (typeof language === 'string') {
        this.selectedLanguage.set(language as AvailableLanguage);
      }
    }
  }

  public handleLanguageSelect(language: string) {
    const previousLanguage = this.selectedLanguage();
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('language', language);
      this.selectedLanguage.set(language as AvailableLanguage);
      // replace lang code in current path and navigate to updated lang path
      const currentPath = this.router.url;
      const p = currentPath.replace(`/${previousLanguage}`, `/${language}`);
      this.router.navigateByUrl(p, { replaceUrl: true });
    }
  }
}
