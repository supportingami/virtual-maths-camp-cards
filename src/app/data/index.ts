import { AvailableLanguage, CardMetadata } from '../types';
import { arrayToHashmap } from '../utils/data.utils';
import enJSON from '../../assets/card-content/en/metadata.json';
import frJSON from '../../assets/card-content/fr/metadata.json';

type CardHashmap = Record<
  AvailableLanguage,
  { [cardId: string]: CardMetadata }
>;

const en: CardMetadata[] = enJSON.map((v) => ({
  ...v,
  type: v.type as any,
  card_suit: v.card_suit as any,
}));

const fr: CardMetadata[] = frJSON.map((v) => ({
  ...v,
  type: v.type as any,
  card_suit: v.card_suit as any,
}));

export const CARD_DATA: CardHashmap = {
  en: arrayToHashmap(en, 'slug'),
  fr: arrayToHashmap(fr, 'slug'),
};
