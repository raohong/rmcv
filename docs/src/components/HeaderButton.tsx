import classNames from 'classnames';
import React from 'react';
import * as styles from './extra.module.less';

const HeaderButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...rest }, ref) => {
  return (
    <button ref={ref} {...rest} className={classNames(styles.button, className)} />
  );
});

export default HeaderButton;
