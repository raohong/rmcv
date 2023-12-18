import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import { TagComponentState, TagSlot } from './interface';

export const TagName = 'Tag';

export const { tagClassNames, getTagSlotClassNames, composeTagSlotClassNames } =
  generateComponentClassNameUtility<
    typeof TagName,
    TagComponentState,
    TagSlot,
    'root' | 'close'
  >(
    TagName,
    {
      root: true,
      close: true,
      outlined: true,
      outlinedDanger: true,
      outlinedDefault: true,
      outlinedPrimary: true,
      outlinedSizeLarge: true,
      outlinedSizeMedium: true,
      outlinedSizeSmall: true,
      outlinedSuccess: true,
      outlinedWarning: true,
      outlinedShapeMark: true,
      outlinedShapeRound: true,
      contained: true,
      containedDanger: true,
      containedDefault: true,
      containedPrimary: true,
      containedSizeLarge: true,
      containedSizeMedium: true,
      containedSizeSmall: true,
      containedSuccess: true,
      containedWarning: true,
      containedShapeMark: true,
      containedShapeRound: true,
    },
    ({ variant, size, type, shape }: TagComponentState) => ({
      root: [
        'root',
        variant,
        camelCase(`${variant}-${type}`),
        camelCase(`${variant}-size-${size}`),
        shape !== 'default' && camelCase(`${variant}-shape-${shape}`),
      ],
      close: ['close'],
    }),
  );
