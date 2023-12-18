import { components } from './config/components';
import { palette } from './config/palette';
import { radii } from './config/radii';
import { space } from './config/space';
import { transition } from './config/transition';
import { typography } from './config/typography';
import { zIndex } from './config/zindex';

export const createToken = () => ({
  palette,
  radii,
  space,
  typography,
  zIndex,
  ...components,
  transition,
});

export const defaultToken = createToken();

export type TokenProps = ReturnType<typeof createToken>;
