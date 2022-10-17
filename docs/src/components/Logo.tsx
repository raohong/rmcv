import React from 'react';
// @ts-ignore
import image from '../images/logo.png';
import * as styles from './Logo.module.less';
import { usePageContext } from './context';

const Logo: React.FC = () => {
  const {
    site: { title },
  } = usePageContext();

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={image} />
      <h1 className={styles.name}>{title}</h1>
    </div>
  );
};

export default Logo;
