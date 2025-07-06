export type AvailableLanguage = 'fr' | 'en';

export type CardMetadata = {
  title: string;
  type: 'puzzle' | 'funfact' | 'game';
  slug: string;
  card_value: string;
  card_suit: 'heart' | 'diamond' | 'club' | 'spade';
};

type CardContentSection = {
  statement: string;
  correct_answer: string;
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
};
