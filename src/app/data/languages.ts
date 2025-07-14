import { AvailableLanguage } from "../types";

export const LANGUAGES_HASHMAP: Record<AvailableLanguage, { code: AvailableLanguage, label: string }> = {
    en: { code: 'en', label: 'English' },
    fr: { code: 'fr', label: 'Français' }
}