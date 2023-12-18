import { createContext, useContext } from 'react';
import { SkeletonShape, SkeletonSize } from './interface';

export const SkeletonContext = createContext<{
  round: boolean;
  titleWidth: SkeletonSize;
  avatarSize: SkeletonSize;
  avatarShape: SkeletonShape;
  imageSize: SkeletonSize;
  imageShape: SkeletonShape;
}>({
  round: false,
  titleWidth: '40%',
  avatarSize: 32,
  avatarShape: 'round',
  imageShape: 'square',
  imageSize: 96,
});

export const useSkeletonContext = () => useContext(SkeletonContext);
