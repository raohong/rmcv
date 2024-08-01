import { lstatSync } from 'node:fs';

class FileCache {
  private cache = new Map<
    string,
    {
      data: any;
      updatedAt: number;
      size: number;
    }
  >();

  public get(filename: string) {
    const item = this.cache.get(filename);

    if (item) {
      const stat = lstatSync(filename);

      if (stat.size !== item.size || stat.mtimeMs !== item.updatedAt) {
        this.delete(filename);
        return null;
      }
      return item.data;
    }
    return null;
  }

  public set(filename: string, data: any) {
    const stat = lstatSync(filename);
    this.cache.set(filename, {
      data,
      updatedAt: stat.mtimeMs,
      size: stat.size,
    });
  }

  public delete(filename: string) {
    this.cache.delete(filename);
  }
}

export default FileCache;
