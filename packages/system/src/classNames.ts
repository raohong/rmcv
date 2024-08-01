import { firstLower, firstUpper } from '@rmc-vant/utils';
import { composeClassNames } from './composeClassNames';

export const generateClassName = (
  name: string,
  slot: string,
  prefixClassName = 'RVui',
) => {
  return `${prefixClassName}${name}-${slot}`;
};

export const generateClassNames = <Slot extends string>(
  name: string,
  slots: Slot[],
  classPrefix?: string,
) => {
  return Object.fromEntries(
    slots.map(slot => [slot, generateClassName(name, slot, classPrefix)]),
  ) as Record<Slot, string>;
};

type FirstLower<T> = T extends string
  ? T extends `${infer A}${infer Rest}`
    ? A extends string
      ? `${Lowercase<A>}${Rest}`
      : never
    : never
  : never;

type GenerateComponentClassNameUtilityReturnType<
  Name extends string,
  State extends object = object,
  Slot extends string = string,
  NSlot extends string = string,
> = Record<
  `get${Capitalize<Name>}SlotClassNames`,
  (state: State) => Record<NSlot, (string | undefined | null | false)[]>
> &
Record<
    `compose${Capitalize<Name>}SlotClassNames`,
  (state: State, classNames?: Record<string, string>) => Record<NSlot, string>
> &
Record<`get${Capitalize<Name>}ClassName`, (slot: string) => string> &
Record<`${FirstLower<Name>}ClassNames`, Record<Slot, string>>;

const defaultGetSlotClassNames = () => ({
  root: ['root'],
});

export const generateComponentClassNameUtility = <
  T extends string,
  State extends object,
  Slot extends string = 'root',
  NSlot extends string = 'root',
>(
  componentName: T,
  slots: Record<Slot, true>,
  getSlotClassNames?: (
    state: State,
  ) => Record<NSlot, (string | undefined | null | false)[]>,
): GenerateComponentClassNameUtilityReturnType<T, State, Slot, NSlot> => {
  const getClassName = (slot: string) => generateClassName(componentName, slot);

  const classNames = generateClassNames(componentName, Object.keys(slots) as Slot[]);
  const internalGetSlotClassNames = (getSlotClassNames
    ?? defaultGetSlotClassNames) as (
    state: State,
  ) => Record<NSlot, (string | undefined | null | false)[]>;

  return {
    [`get${componentName}ClassName`]: getClassName,
    [`${firstLower(componentName)}ClassNames`]: classNames,
    [`get${firstUpper(componentName)}SlotClassNames`]: internalGetSlotClassNames,
    [`compose${firstUpper(componentName)}SlotClassNames`]: (
      state: State,
      _classNames?: Record<string, string>,
    ) => {
      return composeClassNames(
        internalGetSlotClassNames(state),
        getClassName,
        _classNames,
      );
    },
  } as GenerateComponentClassNameUtilityReturnType<T, State, Slot>;
};
