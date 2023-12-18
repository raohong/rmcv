import InternalCol from './Col';
import InternalRow from './Row';

export type {
  RowProps,
  ColProps,
  RowThemeConfig,
  ColThemeConfig,
} from './interface';

export const Row = InternalRow;
export const Col = InternalCol;

export { rowClassNames, colClassNames } from './classNames';
