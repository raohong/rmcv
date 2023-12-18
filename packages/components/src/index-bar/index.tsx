import IndexAnchor from './IndexAnchor';
import InternalIndexBar from './IndexBar';

export type {
  IndexAnchorProps,
  IndexBarProps,
  IndexBarThemeConfig,
} from './interface';

type IndexBarType = typeof InternalIndexBar;

export interface IndexBarInterface extends IndexBarType {
  Anchor: typeof IndexAnchor;
}

const IndexBar = InternalIndexBar as IndexBarInterface;

IndexBar.Anchor = IndexAnchor;

export default IndexBar;
