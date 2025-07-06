export type AvailableLanguage = 'fr' | 'en';

export type CardMetadata = {
  title: string;
  type: 'puzzle' | 'funfact' | 'game';
  slug: string;
  card_value: string;
  card_suit: 'heart' | 'diamond' | 'club' | 'spade';
};
