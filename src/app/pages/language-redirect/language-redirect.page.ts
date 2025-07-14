import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import type { AvailableLanguage } from '../../types';

@Component({
  template: '',
})
export class LanguageRedirectComponent implements OnInit {
  router = inject(Router);

  ngOnInit() {
    const url = this.getRedirectUrl();
    this.router.navigateByUrl(url, { replaceUrl: true });
  }

  /**
   * Any pages without `/${lang}/` base need to be redirected
   * E.g. qr codes need to redirect `/card/2h` -> `/en/card/2h` or `/fr/card/2h`
   * E.g. home page goes to list `/` -> `/en/`
   */
  private getRedirectUrl() {
    const segments = this.router.url.split('/').filter((v) => v);
    const lang = this.getTargetLanguage();
    // add language prefix before path
    const target = [lang, ...segments].join('/');
    return `/${target}`;
  }

  private getTargetLanguage(): AvailableLanguage {
    // NOTE - language service not used to keep page load minimal
    if (typeof window !== 'undefined' && window.localStorage) {
      const language = window.localStorage.getItem('language');
      if (typeof language === 'string') {
        return language as AvailableLanguage;
      }
    }
    return 'en';
  }
}
