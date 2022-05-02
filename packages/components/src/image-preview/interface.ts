import { PortalContainer } from '../portal';

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
  visible?: boolean;
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
};

export type ImagePreviewOptions = Omit<
  ImagePreviewProps,
  'activeIndex' | 'visible' | 'images'
> &
  Required<Pick<ImagePreviewProps, 'images'>>;

export type ImagePreviewWrapperData = ImagePreviewOptions;

export type ImagePreviewInstance = {
  swipeTo: (activeIndex: number) => void;
  close: () => void;
};

export type ImagePreviewWrapperRef = ImagePreviewInstance & {
  open: () => void;
  updateData: (data: ImagePreviewWrapperData) => void;
};

export type ImagePreviewInterface = (
  options: ImagePreviewOptions,
) => ImagePreviewInstance;
