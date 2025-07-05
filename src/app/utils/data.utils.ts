// TODO - jokers
export const ALL_CARD_IDS = generateCardIDs();

export const ALL_CARDS_BY_LANGUAGE: Record<
  'en' | 'fr',
  { [card_id: string]: any }
> = {
  en: {},
  fr: {},
};

export function getCardById(id: string) {
  return { title: `card ${id}` };
}

// Generates all combinations of values from two arrays
function combinations<T, U>(a: T[], b: U[]): [T, U][] {
  return a.flatMap((x) => b.map((y) => [x, y] as [T, U]));
}

function generateCardIDs() {
  const suits = ['H', 'D', 'S', 'C'];
  const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const pairs = combinations(values, suits);
  return pairs.map(([value, suit]) => `${value}${suit}`);
}
