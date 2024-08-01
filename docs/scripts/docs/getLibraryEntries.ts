import { readFile } from 'node:fs/promises';
import path from 'node:path';
import FileCache from './FileCache';
import type { IContext } from './type';

const cache = new FileCache();

export const getLibraryEntries = async (context: IContext, components: string[]) => {
  const iconFilename = path.join(context.iconPkgRoot, 'src', 'list.ts');

  let iconRecords: Map<string, boolean> = cache.get(iconFilename);

  if (!iconRecords) {
    const content = await context.formatCode(
      (await readFile(path.join(context.iconPkgRoot, 'src', 'list.ts'), 'utf8'))
        .replace('export default', '')
        .replace(/\s*as\s*const/, '')
        .replace('};', '}')
        .trim(),
      { parser: 'json' },
    );

    const icons = Object.values(
      JSON.parse(content) as {
        outlined: string[];
        base: string[];
        filled: string[];
      },
    )

      .flat();

    iconRecords = new Map(icons.map(item => [item, true]));

    iconRecords.set('Icon', true);

    cache.set(iconFilename, iconRecords);
  }

  return {
    icons: components.filter(item => iconRecords.has(item)),
    components: components.filter(item => !iconRecords.has(item)),
  };
};
