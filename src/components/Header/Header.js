import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../../assets/QuikieAppsLogo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.navbar}>
      <Image className={styles.logo} src={Logo} />
    </div>
  );
};

export default Header;
