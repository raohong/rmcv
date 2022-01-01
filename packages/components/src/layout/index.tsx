import './style';

export type { RowProps, ColProps } from './interface';
import InternalCol from './Col';
import InternalRow from './Row';

export const Row = InternalRow;
export const Col = InternalCol;
