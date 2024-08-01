import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { Sticky } from '../sticky';
import { useIndexBarContext } from './context';
import type { IndexAnchorProps } from './interface';
import { IndexBarAnchor } from './styles';

const IndexAnchor = React.forwardRef<HTMLDivElement, IndexAnchorProps>(
  ({ index, className, children, ...rest }, ref) => {
    const {
      sticky,
      stickyOffsetTop,
      unregisterAnchor,
      registerAnchor,
      componentState,
      anchorClassName,
    } = useIndexBarContext()!;
    const domRef = useRef<HTMLDivElement>(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const target = domRef.current;

      if (!isEmpty(index) && target) {
        registerAnchor?.(index, target);
      }

      return () => {
        if (!isEmpty(index)) {
          unregisterAnchor?.(index);
        }
      };
    }, [unregisterAnchor, registerAnchor, index]);

    const content = (
      <IndexBarAnchor
        componentState={{ ...componentState, fixed: isFixed }}
        className={clsx(anchorClassName, className)}
        ref={ref}
        {...rest}
      >
        {isEmpty(children) ? index : children}
      </IndexBarAnchor>
    );

    return (
      <div ref={domRef}>
        {sticky
          ? (
              <Sticky onChange={setIsFixed} offsetTop={stickyOffsetTop}>
                {content}
              </Sticky>
            )
          : (
              content
            )}
      </div>
    );
  },
);

export default IndexAnchor;
