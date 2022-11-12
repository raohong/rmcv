import { clamp, isNumber, toNumber } from '@rmc-vant/utils';

export const sanitizePage = (
  val: number | undefined,
  total: number,
  defaultValue: number = 1,
) => {
  return clamp(toNumber(val, defaultValue), defaultValue, total);
};

export const sanitizePageRange = (
  range: number,
  total: number,
  defaultValue = 1,
) => {
  const internalRange = toNumber(range, defaultValue);

  return clamp(internalRange, 0, Math.floor((total - 1) / 2));
};

const generateRange = (min: number, max: number) =>
  Array.from({ length: max - min + 1 }, (_, i) => i + min);

type IPage = 'prevJump' | number | 'nextJump';

const isIncrementingArray = (pages: IPage[]) => {
  const isPlainNumber = pages.every((item) => isNumber(item));

  if (!isPlainNumber) {
    return false;
  }

  const list = pages as number[];

  if (list.length === 1) {
    return true;
  }

  return (
    ((list[0] + list[list.length - 1]) / 2) * pages.length ===
    list.reduce((sum, item) => sum + item, 0)
  );
};

const fillPages = (
  pages: IPage[],
  page: number,
  totalPage: number,
  visibleLength: number,
) => {
  let index = -1;

  if (page <= totalPage / 2) {
    index = pages.findIndex((item) => item === 'nextJump');

    if (index === -1) {
      // 找到是跳跃数的位置
      index = pages.findIndex(
        (item, i) =>
          i > 0 &&
          isNumber(item) &&
          isNumber(pages[i - 1]) &&
          item - (pages[i - 1] as number) > 1,
      );
    }

    if (index > -1) {
      pages.splice(
        0,
        index,
        ...generateRange(1, visibleLength - (pages.length - index)),
      );
    }
  } else {
    index = pages.findIndex((item) => item === 'prevJump');

    if (index === -1) {
      // 找到下一个是跳跃数的位置
      index = pages.findIndex(
        (item, i) =>
          i < pages.length - 1 &&
          isNumber(item) &&
          isNumber(pages[i + 1]) &&
          (pages[i + 1] as number) - item > 1,
      );
    }

    if (index > -1) {
      pages.splice(
        index + 1,
        pages.length - (index + 1),
        ...generateRange(totalPage - (visibleLength - (index + 1)) + 1, totalPage),
      );
    }
  }
};

export const getPages = (
  page: number,
  totalPage: number,
  boundaryRange: number,
  siblingRange: number,
  jump = true,
) => {
  const visibleLength = Math.min(
    1 + (boundaryRange + siblingRange + Number(jump)) * 2,
    totalPage,
  );
  const pages: IPage[] = [page];

  if (totalPage <= visibleLength) {
    return generateRange(1, totalPage);
  }

  // previous sibling pages
  if (page > 1) {
    pages.unshift(
      ...generateRange(Math.max(1, page - 1 - siblingRange + 1), page - 1),
    );
  }

  // next sibling pages
  if (page + 1 <= totalPage) {
    pages.push(
      ...generateRange(page + 1, Math.min(totalPage, page + 1 + siblingRange - 1)),
    );
  }

  // previous jump
  if (page - siblingRange - (boundaryRange + 1) > 1 && jump) {
    pages.unshift('prevJump');
  }

  // next jump
  if (totalPage - boundaryRange - (page + siblingRange) > 1 && jump) {
    pages.push('nextJump');
  }

  // previous boundary pages
  if (page > 1) {
    pages.unshift(...generateRange(1, Math.min(page - 1, boundaryRange)));
  }

  // next boundary pages
  if (page + 1 <= totalPage) {
    pages.push(
      ...generateRange(Math.max(page + 1, totalPage - boundaryRange + 1), totalPage),
    );
  }

  const result = Array.from(new Set(pages));

  if (result.length < visibleLength && totalPage >= visibleLength) {
    if (isIncrementingArray(pages)) {
      const input: [number, number] =
        page < totalPage / 2
          ? [1, visibleLength]
          : [totalPage - visibleLength + 1, totalPage];
      result.splice(0, result.length, ...generateRange(...input));
    } else {
      fillPages(result, page, totalPage, visibleLength);
    }
  }

  return result;
};
