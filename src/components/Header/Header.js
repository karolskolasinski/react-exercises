import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const Header = ({ openModalFn }) => (
    <header className={styles.wrapper}>
        <span className={styles.logo}>FavNote.</span>
        <HeaderNavigation />
        <Button onClick={openModalFn} secondary>new item</Button>
    </header>
);

export default Header;
