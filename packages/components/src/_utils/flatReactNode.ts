import React from 'react';
import { toArray } from '@rmc-vant/utils';

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
    } else {
      result.push(item);
    }
  });

  return result;
};

export default flatReactNode;
