import { JSXIntrinsicElementProps } from '../types';

type StickyBaseProps = {
  /**
   * @description 距离目标窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * @description 距离目标窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * @description 窗口
   */
  target?: (node: HTMLElement | null) => Element | undefined;
  /**
   * @description 是否启用滚动监听，禁用后可以自定义
   */
  disabled?: boolean;
  /**
   * @description 指定zIndex
   */
  zIndex?: number;
};

export type StickyProps = JSXIntrinsicElementProps<StickyBaseProps>;

export type StickyPosition = 'top' | 'bottom';
