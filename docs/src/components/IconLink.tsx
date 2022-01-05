import React from 'react';
import * as styles from './extra.module.less';

const IconLink: React.FC<{
  href: string;
  icon: React.ReactNode;
}> = ({ href, icon }) => {
  return (
    <a className={styles.iconLink} target="_blank" href={href}>
      {icon}
    </a>
  );
};

export default IconLink;
