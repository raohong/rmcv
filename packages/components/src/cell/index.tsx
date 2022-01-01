import './style';

export type {
  CellProps,
  CellArrowDirection,
  CellGroupProps,
} from './interface';
import InternalCell from './Cell';
import CellGroup from './CellGroup';

type InternalCellType = typeof InternalCell;

export interface CellType extends InternalCellType {
  Group: typeof CellGroup;
}

const Cell = InternalCell as CellType;
Cell.Group = CellGroup;

export default Cell;
