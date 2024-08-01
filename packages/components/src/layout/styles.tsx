import { styled } from '@rmc-vant/system';
import { isNil } from '@rmc-vant/utils';
import { RowName } from './classNames';
import type {
  ColComponentState,
  ColProps,
  RowComponentState,
  RowProps,
} from './interface';

const COLUMN = 24;
const alignConfigs = {
  bottom: 'end',
  middle: 'center',
  top: 'start',
} satisfies Record<NonNullable<RowProps['align']>, string>;

export const RowRoot = styled<'div', RowComponentState, RowProps>('div', {
  name: RowName,
  slot: 'root',
})(({ componentState: { gutter, wrap, align, justify } }) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  gap: gutter,
  display: 'flex',
  position: 'relative',
  flexWrap: wrap ? 'wrap' : undefined,
  alignItems: align && alignConfigs[align],
  justifyContent: justify,
}));

export const ColRoot = styled<'div', ColComponentState, ColProps>('div')(
  ({ componentState: { span, offset } }) => ({
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    minHeight: 1,
    marginLeft: offset ? `${((100 / COLUMN) * offset).toFixed(6)}%` : undefined,
    flex: isNil(span) ? 1 : span === 0 ? 0 : undefined,
    width: span ? `${((100 / COLUMN) * span).toFixed(6)}%` : undefined,
    maxWidth: '100%',
  }),
);
