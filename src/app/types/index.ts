export type AvailableLanguage = 'fr' | 'en';

export type CardMetadata = {
  title: string;
  type: 'puzzle' | 'funfact' | 'game' | 'counting';
  /** Slug used for card lookup, e.g. "2D" or "5H" */
  slug: string;
  card_value: string;
  card_suit: 'heart' | 'diamond' | 'club' | 'spade';
  /** Main problem statement */
  statement: string;
};

export type CardContentSection = {
  statement: string;
  correct_answer?: string;
  hint: string;
  explanation: string;
};

export type CardContent = {
  title: string;
  metadata: {
    type: CardMetadata['type'];
  };
  main_version: CardContentSection;
  extension_1: CardContentSection;
  extension_2?: CardContentSection;
  additional_information: {
    about: string;
    references: string[];
  };
  _not_found?: boolean;
} & CardMetadata;
