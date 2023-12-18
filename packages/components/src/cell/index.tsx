import InternalCell from './Cell';
import InternalCellGroup from './CellGroup';

export type {
  CellProps,
  CellArrowDirection,
  CellGroupProps,
  CellThemeConfig,
  CellGroupThemeConfig,
  CellSize,
} from './interface';

type InternalCellInterface = typeof InternalCell;

export interface CellInterface extends InternalCellInterface {
  Group: typeof InternalCellGroup;
}

const Cell = InternalCell as CellInterface;
Cell.Group = InternalCellGroup;

export { cellClassNames, cellGroupClassNames } from './classNames';

export default Cell;
