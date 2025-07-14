import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AvailableLanguage } from '../types';
import { LANGUAGES_HASHMAP } from '../data/languages';


@Injectable({ providedIn: 'root' })
export class TranslateService {

    private router = inject(Router)

    /** Internal signal used to trigger language extraction */
    private currentUrl = signal<string | undefined>(undefined);

    /** Active app language, as extracted from current URL */
    public language = computed(() => {
        const url = this.currentUrl()
        if (url) {
            return this.getLanguageFromUrl(url);
        }
        return undefined

    })

    constructor() {
        this.subscribeToRouterEvents()

        // Store the current language in localstorage to use as default
        effect(() => {
            const language = this.language()
            if (language) {
                this.storeDefaultLanguage(language)
            }
        })
    }

    /** Subscribe to route changes to evaluate currentUrl for language prefix */
    private subscribeToRouterEvents() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.set(event.urlAfterRedirects);
            }
        })
    }

    /**
     * Use current url to determine which language is in use, with fallback to `en`
     * e.g. `/en/card/AC
     */
    private getLanguageFromUrl(url: string) {
        const segments = url.split('/').filter(Boolean);
        const lang = segments[0] as AvailableLanguage
        if (lang && LANGUAGES_HASHMAP[lang]) {
            return LANGUAGES_HASHMAP[lang].code
        }
        return undefined

    }


    private storeDefaultLanguage(language: AvailableLanguage) {
        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem('language', language);
        }
    }

    private getDefaultLanguage(): AvailableLanguage {
        if (typeof window !== 'undefined' && window.localStorage) {
            const language = window.localStorage.getItem('language') as AvailableLanguage | null;
            if (language && LANGUAGES_HASHMAP[language]) {
                return language as AvailableLanguage
            }
        }
        return 'en'
    }

}