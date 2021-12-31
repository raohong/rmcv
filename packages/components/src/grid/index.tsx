export type { GridDirection, GridItemProps, GridProps } from './interface';
import InternalGrid from './Grid';
import GridItem from './GridItem';

type InternaelGridType = typeof InternalGrid;

export interface GridType extends InternaelGridType {
  Item: typeof GridItem;
}

const Grid = InternalGrid as GridType;

Grid.Item = GridItem;

export default Grid;
