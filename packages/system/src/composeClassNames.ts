export const composeClassNames = <Slot extends string>(
  slots: Record<Slot, (string | null | undefined | false)[]>,
  getClassName: (slot: string) => string,
  classNames?: Record<string, string>,
) => {
  return (
    Object.entries(slots) as [Slot, (string | null | undefined | false)[]][]
  ).reduce(
    (result, [key, slot]) => {
      const names = slot.filter(Boolean).map(item => getClassName(item as string));

      if (classNames?.[key]) {
        names.push(classNames[key]);
      }

      result[key] = names.join(' ');

      return result;
    },
    {} as Record<Slot, string>,
  );
};
