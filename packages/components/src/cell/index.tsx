import './style';

export type {
  CellProps,
  CellArrowDirection,
  CellGroupProps,
} from './interface';
import InternalCell from './Cell';
import InternalCellGroup from './CellGroup';

export const Cell = InternalCell;
export const CellGroup = InternalCellGroup;
