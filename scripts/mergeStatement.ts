import { readFile } from 'fs/promises';

/**
 * Utility function used to merge the `main_version.statement` from each card details to the
 * main card metadata
 */
async function mergeStatement(lang: 'en' | 'fr') {
  const cardDir = `src/assets/card-content/${lang}/cards`;
  const meta = await readFile(`src/app/data/${lang}.json`, 'utf-8');
  const metaJson = JSON.parse(meta);
  const promises = metaJson.map(async (el) => {
    const details = await readFile(`${cardDir}/${el.slug}.json`, 'utf8');
    const { main_version } = JSON.parse(details);
    el.statement = main_version.statement;
    return el;
  });
  const res = await Promise.all(promises);
  return res;
}
