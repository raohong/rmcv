import { IntrinsicElementsKeys } from '../types';

export type SafeAreaProps = {
  /**
   * @description 是否设置顶部
   */
  top?: boolean;
  /**
   * @description 是否设置底部
   * @default true
   */
  bottom?: boolean;
  /**
   * @description 是否关闭
   */
  disabled?: boolean;
  /**
   * @description 自定义 component
   * @default
   */
  component?: IntrinsicElementsKeys | React.ComponentType<any>;
};
