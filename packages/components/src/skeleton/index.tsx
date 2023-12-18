import InternalSkeleton from './Skeleton';
import {
  SkeletonAvatar,
  SkeletonImage,
  SkeletonParagraph,
  SkeletonTitle,
} from './components';

export type { SkeletonProps, SkeletonThemeConfig } from './interface';

export { skeletonClassNames } from './classNames';

type SkeletonType = typeof InternalSkeleton;

interface SkeletonInterface extends SkeletonType {
  Avatar: typeof SkeletonAvatar;
  Image: typeof SkeletonImage;
  Title: typeof SkeletonTitle;
  Paragraph: typeof SkeletonParagraph;
}

const Skeleton = InternalSkeleton as SkeletonInterface;

Skeleton.Avatar = SkeletonAvatar;
Skeleton.Image = SkeletonImage;
Skeleton.Title = SkeletonTitle;
Skeleton.Paragraph = SkeletonParagraph;

export default Skeleton;
