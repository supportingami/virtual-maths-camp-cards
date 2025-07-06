// TODO - jokers
export const ALL_CARD_IDS = generateCardIDs();

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

/**
 * Convert an object array into a json object, with keys corresponding to array entries
 * @param keyfield any unique field which all array objects contain to use as hash keys (e.g. 'id')
 * @param keyAccessor alternative function to access key from element data (instead of using keyfield)
 */
export function arrayToHashmap<T extends object>(
  arr: T[],
  keyfield: keyof T,
  keyAccessor?: (el: T) => string
) {
  const hashmap: Record<string, T> = {};
  if (!Array.isArray(arr)) {
    console.error('Cannot convert array to hashmap, not an array', {
      arr,
      keyfield,
    });
    return {};
  }
  for (const el of arr) {
    const hashmapKey = keyAccessor ? keyAccessor(el) : el[keyfield];
    if (typeof hashmapKey === 'string') {
      hashmap[hashmapKey] = el;
    }
  }
  return hashmap;
}
