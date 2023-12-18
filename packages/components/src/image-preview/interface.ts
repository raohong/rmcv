import { PortalContainer } from '../portal';
import { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { ImagePreviewName } from './classNames';

export type ImagePreviewProps = {
  /**
   * @description 当前图片索引
   */
  activeIndex?: number;
  /**
   * @description 切换当前图片时触发
   */
  onChange?: (current: number) => void;
  /**
   * @description 是否显示图片预览
   */
  open?: boolean;
  /**
   * @description 是否在显示图片预览时才渲染节点
   */
  lazyRender?: boolean;
  /**
   * @description 关闭时回调
   */
  onClose?: () => void;
  /**
   * @description 是否显示页码
   * @default true
   */
  showIndex?: boolean;
  /**
   * @description 手势缩放时，最大缩放比例
   * @default 3
   */
  maxZoom?: number;
  /**
   * @description 手势缩放时，最小缩放比例
   * @default 1/3
   */
  minZoom?: number;
  /**
   * @description 是否显示关闭图标
   */
  closeable?: boolean;
  /**
   * @description 需要预览的图片 URL 数组
   */
  images?: string[];
  /**
   * @description 关闭动画完成
   */
  afterClose?: () => void;
  /**
   * @description 图片预览起始位置索引
   */
  defaultActiveIndex?: number;
  /**
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;

  classNames?: Partial<Record<ImagePreviewNSlot, string>>;
};

export type Vector2 = [number, number];

export type DragExitHandler = (state: {
  first: boolean;
  last: boolean;
  velocity: number;
  direction: number;
  movement: number;
}) => void;

export type ImagePreviewItemProps = {
  imageUrl: string;
  onDragExit: DragExitHandler;
  onDrag: (
    movement: number,
    direction: number,
    velocity: number,
    last: boolean,
  ) => void;
  containerWidth: number;
  containerHeight: number;
  minScale: number;
  maxScale: number;
  visible: boolean;
  gestureEnabled: boolean;
  onTap: () => void;

  slotClassNames: Record<ImagePreviewSlot, string>;
  componentState: ImagePreviewComponentState;
};

export type ImagePreviewOptions = Omit<
  ImagePreviewProps,
  'activeIndex' | 'visible' | 'images'
> & {
  images: string[];
};

export type ImagePreviewApiRef = {
  swipeTo: (activeIndex: number) => void;
  close: () => void;
  open: (options: string[] | ImagePreviewOptions) => void;
};

export type ImagePreviewNSlot = 'root' | 'header' | 'index';

export type ImagePreviewSlot = ImagePreviewNSlot;

export type ImagePreviewComponentState = {};

export type ImagePreviewStyleOverrides = ComponentStyleOverrides<
  ImagePreviewComponentState,
  ImagePreviewSlot
>;

export type ImagePreviewThemeConfig = ComponentThemeConfig<
  typeof ImagePreviewName,
  ImagePreviewProps,
  ImagePreviewStyleOverrides
>;
