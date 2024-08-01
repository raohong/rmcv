import {
  getPickerColumnData,
  getPickerColumnsLength,
  isNestedOptions,
} from '../utils';

describe('is it a nested structure', () => {
  it('should be true', () => {
    const data = [{ children: [], value: 1 }];

    expect(isNestedOptions(data)).toBeTruthy();
  });

  it('should be false', () => {
    expect(isNestedOptions([])).toBeFalsy();
  });
});

describe('get the length of columns', () => {
  it('multidimensional arrays', () => {
    expect(getPickerColumnsLength([[1]])).toBe(1);
    expect(getPickerColumnsLength([['1'], [2]])).toBe(2);
  });

  it('nested structure', () => {
    const data = [
      {
        value: 1,
        children: [{ value: 3 }],
      },
    ];
    expect(getPickerColumnsLength(data)).toBe(2);
  });
});

describe('get standard columns data and index data', () => {
  it('multidimensional arrays', () => {
    const data = [
      [0, 1],
      [3, 4],
    ];
    const value = [0, 4];

    const { indexList, columns } = getPickerColumnData(
      value,
      data,
      getPickerColumnsLength(data),
    );

    expect(indexList).toStrictEqual([0, 1]);
    expect(columns).toStrictEqual(
      data.map(list => list.map(value => ({ value, label: value }))),
    );
  });

  it('multidimensional arrays with empty value', () => {
    const data = [
      [0, 1],
      [3, 4],
    ];
    const value: number[] = [];

    const { indexList, columns } = getPickerColumnData(
      value,
      data,
      getPickerColumnsLength(data),
    );

    expect(indexList).toStrictEqual([0, 0]);
    expect(columns).toStrictEqual(
      data.map(list => list.map(value => ({ value, label: value }))),
    );
  });

  it('nested structure', () => {
    const data = [
      {
        value: 'A',
        children: [
          {
            value: 'B',
            children: [{ value: 'E' }],
          },
          {
            value: 'C',
          },
        ],
      },
      {
        value: 'H',
      },
    ];
    const value = ['A', 'C'];

    const { indexList } = getPickerColumnData(
      value,
      data,
      getPickerColumnsLength(data),
    );

    expect(indexList).toStrictEqual([0, 1]);
  });

  it('nested structure  with empty value', () => {
    const data = [
      {
        value: 'A',
        children: [
          {
            value: 'B',
            children: [{ value: 'E' }],
          },
          {
            value: 'C',
          },
        ],
      },
      {
        value: 'H',
      },
    ];
    const value: string[] = [];

    const { indexList } = getPickerColumnData(
      value,
      data,
      getPickerColumnsLength(data),
    );

    expect(indexList).toStrictEqual([0, 0, 0]);
  });
});
