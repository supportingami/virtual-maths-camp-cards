import { AvailableLanguage } from '../../types'
import en from './en.json'
import fr from './fr.json'

export type TranslationStringCode = keyof typeof en

export const APP_STRINGS: Record<AvailableLanguage, Record<TranslationStringCode, string>> = {
    en,
    fr
}