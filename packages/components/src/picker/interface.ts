import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { PickerName } from './classNames';

export type PickerValue = string | number;

export type PickerToolbarPosition = 'top' | 'bottom';

export type PickerToolbarAction = {
  cancel: () => void;
  confirm: () => void;
};

export type PickerBaseOption<V extends PickerValue = PickerValue> = {
  label?: React.ReactNode;
  value: V;
  disabled?: boolean;
};

export type PickerBaseOptionWithChildren<V extends PickerValue = PickerValue> =
  PickerBaseOption<V> & {
    children?: PickerBaseOptionWithChildren<V>[];
  };

export type PickerOption<V extends PickerValue = PickerValue> =
  | PickerBaseOption<V>
  | PickerValue;

export type PickerColumns<V extends PickerValue = PickerValue> =
  | PickerOption<V>[][]
  | PickerBaseOptionWithChildren<V>[];

type PickerBaseProps<V extends PickerValue> = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * @description 对象数组，配置每一列显示的数据
   */
  columns?: PickerColumns<V>;
  /**
   * @description 当前选中的 value
   */
  value?: V[];
  /**
   * @description 默认 value
   */
  defaultValue?: V[];
  /**
   * @description 选择器 value 变化时触发
   */
  onChange?: (value: V[], sourceIndex: number) => void;
  /**
   * @description 是否是弹出层模式
   */
  popup?: boolean;
  /**
   * @description 是否在显示弹层时才渲染节点
   */
  lazyRender?: boolean;
  /**
   * @description 当 mode 是弹出层时
   */
  children?: ((value?: V[]) => React.ReactElement) | React.ReactElement;
  /**
   * @description 选项高度
   * @default 44
   */
  optionHeight?: number;
  /**
   * @description 是否显示加载状态
   */
  loading?: boolean;
  /**
   * @description 顶部栏标题
   */
  title?: React.ReactNode;
  /**
   * @description 自定义渲染 toolbar
   */
  toolbar?: (action: PickerToolbarAction) => React.ReactNode;
  /**
   * @description 确认按钮文字
   */
  confirmButtonText?: React.ReactNode;
  /**
   * @description 取消按钮文字
   */
  cancelButtonText?: React.ReactNode;
  /**
   * @description 顶部栏位置，可选值为 bottom
   */
  toolbarPosition?: PickerToolbarPosition;
  /**
   * @description 是否显示顶部栏
   * @default true
   */
  showToolbar?: boolean;
  /**
   * @description 可见的选项个数
   * @default 6
   */
  visibleOptionNum?: number;
  /**
   * @description 点击取消按钮时触发
   */
  onCancel?: () => void;
  /**
   * @description 内置模式下，Picker 打开的时候
   */
  onOpen?: () => void;
  /**
   * @description 点击确定按钮时触发
   */
  onConfirm?: (value: V[] | undefined) => void;
  /**
   * @description Column value 变化时触发
   */
  onColumnChange?: (columnIndex: number, value: V) => void;
  /**
   * @description 滚动结束后是否立即触发
   * @default true
   */
  immediateChange?: boolean;

  classNames?: Partial<Record<PickerNSlot, string>>;
};

export type PickerProps<V extends PickerValue = PickerValue> =
  JSXIntrinsicElementProps<PickerBaseProps<V>> & SystemStyledComponentProps;

export type PickerColumnProps<V extends PickerValue = PickerValue> = {
  className?: string;
  selectedIndex?: number;
  onChange?: (columnIndex: number, value: V) => void;
  optionHeight: number;
  options: PickerBaseOption<V>[];
  immediateChange?: boolean;
  totalHeight: number;
  columnIndex: number;
  componentState: PickerComponentState;
  slotClassNames: Record<PickerNSlot, string>;
};

export type PickerNSlot =
  | 'toolbar'
  | 'confirmButton'
  | 'cancelButton'
  | 'mask'
  | 'indicator'
  | 'loading'
  | 'columnContainer'
  | 'root'
  | 'popup'
  | 'columnRoot'
  | 'option'
  | 'title';

export type PickerSlot = PickerNSlot | 'positionBottom' | 'optionDisabled';

export type PickerComponentState = {
  loading: boolean;
  toolbarPosition: PickerOption;
  popup: boolean;
};

export type PickerOptionComponentState = PickerComponentState & {
  disabled: boolean;
};

export type PickerStyleOverrides = ComponentStyleOverrides<
  PickerComponentState,
  Exclude<PickerSlot, 'option'>
> &
ComponentStyleOverrides<PickerOptionComponentState, 'option'>;

export type PickerThemeConfig = ComponentThemeConfig<
  typeof PickerName,
  PickerProps,
  PickerStyleOverrides
>;
