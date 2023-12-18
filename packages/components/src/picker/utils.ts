import { isPlainObject, omit } from '@rmc-vant/utils';
import type {
  PickerBaseOption,
  PickerBaseOptionWithChildren,
  PickerColumns,
  PickerValue,
} from './interface';

export const isNestedOptions = (
  columns: PickerColumns,
): columns is PickerBaseOptionWithChildren[] => {
  if (!columns || !columns[0]) {
    return false;
  }

  return isPlainObject(columns[0]) && 'children' in columns[0];
};

export const getPickerColumnsLength = (columns: PickerColumns) => {
  /**
   * 嵌套结构默认取第一个 item 的 children 深度
   */
  if (isNestedOptions(columns)) {
    let item: PickerBaseOptionWithChildren | undefined = columns[0];
    let length = 0;

    while (item) {
      length++;

      item = item.children?.[0];
    }

    return length;
  }

  return columns.length;
};

export const getPickerColumnData = <V extends PickerValue>(
  value: V[] | undefined,
  columns: PickerColumns<V>,
  length: number,
  fillValue?: boolean,
) => {
  if (!columns || !columns[0]) {
    return {
      columns: [] as PickerBaseOption<V>[][],
      indexList: [] as number[],
    };
  }

  const indexSource = new Array(length).fill(0);

  if (isNestedOptions(columns)) {
    const indexList: number[] = [];
    const result = indexSource.reduce(
      (
        map: {
          source: PickerBaseOptionWithChildren<V>[] | undefined;
          options: PickerBaseOption<V>[][];
        },
        _,
        i,
      ) => {
        if (!map.source) {
          map.options.push([]);

          return map;
        }

        map.options.push(map.source.map((item) => omit(item, ['children'])));

        const targetIndex = Math.max(
          0,
          map.source.findIndex((item) => item.value === value?.[i]),
        );

        if (value && fillValue && value?.[i] === undefined) {
          value[i] = map.source[0].value;
        }

        indexList.push(targetIndex);

        map.source = map.source[targetIndex]?.children;

        return map;
      },
      {
        source: columns,
        options: [],
      },
    );

    return {
      indexList,
      columns: result.options,
    };
  }

  const targetColumns: PickerBaseOption<V>[][] = isPlainObject(columns[0][0])
    ? (columns as PickerBaseOption<V>[][])
    : (columns as V[][]).map((list) =>
        list.map((value) => ({
          value,
          label: value,
        })),
      );

  return {
    columns: targetColumns,
    indexList: indexSource.map((_, i) =>
      Math.max(
        0,
        targetColumns[i].findIndex((item) => item.value === value?.[i]),
      ),
    ),
  };
};

export const fillValueByNestedOptions = <V extends PickerValue>(
  value: V[],
  columns: PickerBaseOptionWithChildren<V>[],
  length: number,
) => {
  const indexSource = new Array(length).fill(0);

  indexSource.reduce(
    (
      map: {
        source: PickerBaseOptionWithChildren<V>[] | undefined;
        options: PickerBaseOption<V>[][];
      },
      _,
      i,
    ) => {
      if (!map.source) {
        map.options.push([]);

        return map;
      }

      map.options.push(map.source.map((item) => omit(item, ['children'])));

      const targetIndex = Math.max(
        0,
        map.source.findIndex((item) => item.value === value?.[i]),
      );

      if (value && value?.[i] === undefined) {
        value[i] = map.source[0].value;
      }

      map.source = map.source[targetIndex]?.children;

      return map;
    },
    {
      source: columns,
      options: [],
    },
  );
};
