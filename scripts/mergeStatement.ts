import { readFile } from 'fs/promises';

/**
 * Utility function used to merge the `main_version.statement` from each card details to the
 * main card metadata
 */
async function mergeStatement(lang: 'en' | 'fr') {
  const cardAssetsDir = `src/assets/card-content/${lang}`;
  const cardDir = `src/assets/card-content/${lang}/cards`;
  const meta = await readFile(`${cardAssetsDir}/metadata.json`, 'utf-8');
  const metaJson = JSON.parse(meta);
  const promises = metaJson.map(async (el) => {
    const cardAssetPath = `${cardAssetsDir}/cards/${el.slug}.json`;
    const details = await readFile(cardAssetPath, 'utf8');
    const { main_version } = JSON.parse(details);
    el.statement = main_version.statement;
    return el;
  });
  const res = await Promise.all(promises);
  return res;
}
