import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  PaginationComponentState,
  PaginationNSlot,
  PaginationSlot,
} from './interface';

export const PaginationName = 'Pagination';

export const {
  composePaginationSlotClassNames,
  getPaginationSlotClassNames,
  paginationClassNames,
} = generateComponentClassNameUtility<
  typeof PaginationName,
  PaginationComponentState,
  PaginationSlot,
  PaginationNSlot
>(
  PaginationName,
  {
    root: true,

    multi: true,
    simple: true,
    page: true,
    jump: true,
    action: true,
    description: true,
  },
  ({ mode }) => ({
    root: ['root', mode],
    page: ['page'],
    jump: ['jump'],
    action: ['action'],
    description: ['description'],
  }),
);
