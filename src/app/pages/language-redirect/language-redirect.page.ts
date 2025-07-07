import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    const lang = window.localStorage.getItem('language') || 'en';
    // add language prefix before path
    const target = [lang, ...segments].join('/');
    return `/${target}`;
  }
}
