import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import { isEmpty } from '@rmc-vant/utils';
import Sticky from '../sticky';
import { useIndexBarContext } from './context';
import type { IndexAnchorProps } from './interface';

const IndexAnchor = React.forwardRef<HTMLDivElement, IndexAnchorProps>(
  ({ index, className, children, ...rest }, ref) => {
    const { sticky, stickyOffsetTop, unregisterAnchor, registerAnchor } =
      useIndexBarContext() ?? {};
    const { getPrefixCls } = useConfigContext();
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

    const props = {
      ...rest,
      className: classNames(getPrefixCls('index-bar-anchor'), className),
      ref,
      children: children ?? index,
    };

    return (
      <div ref={domRef}>
        {sticky ? (
          <Sticky
            onChange={setIsFixed}
            className={isFixed ? getPrefixCls('index-bar-anchor-fixed') : undefined}
            offsetTop={stickyOffsetTop}
          >
            <div {...props} />
          </Sticky>
        ) : (
          <div {...props} />
        )}
      </div>
    );
  },
);

export default IndexAnchor;
