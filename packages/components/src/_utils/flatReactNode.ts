import React from 'react';
import { toArray, isArray } from '@rmc-vant/utils';

const flatReactNode = (
  list: React.ReactNode | React.ReactNode[],
): React.ReactNode[] => {
  const result: React.ReactNode[] = [];

  toArray(list).forEach((item) => {
    if (React.isValidElement(item) && item.type === React.Fragment) {
      result.push(
        ...flatReactNode(
          (item as React.ReactElement<React.ComponentProps<typeof React.Fragment>>)
            .props.children,
        ),
      );
    } else if (isArray(item)) {
      result.push(...flatReactNode(item));
    } else {
      result.push(item);
    }
  });

  return result;
};

export default flatReactNode;
