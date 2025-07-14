import { computed, inject, Pipe, PipeTransform, Signal } from '@angular/core';
import { TranslateService } from '../services/translate.service';
import { APP_STRINGS, TranslationStringCode } from '../data';


/**
 * Pipe to translate input value to current app language
 * NOTE - as the current language is defined via signal, this pipe returns
 * a computed signal. To be used enclose as
 * ```html
 * {{('VALUE' | translate)()}}
 * ```
 * where VALUE is a lookup from the main `APP_STRINGS` list
 */
@Pipe({
    name: 'translate',
    pure: true,
})
export class TranslatePipe implements PipeTransform {

    private translateService = inject(TranslateService)

    transform(value: TranslationStringCode): Signal<string> {
        return computed(() => {
            const lang = this.translateService.language()
            if (lang) {
                const translation = APP_STRINGS[lang]?.[value]
                if (translation) {

                    return translation
                }
                else {
                    console.warn(`[Translate] ${value} missing ${lang} translation`)
                }

            }
            return value
        })


    }
}