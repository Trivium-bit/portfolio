import React from 'react';
import style from './Header.module.scss';
import Nav from './nav/Nav'
import BurgerNav from './burgerNav/BurgerNav'
import MySocialNetworks from '../common/components/mySocialNetworks/MySocialNetworks';

function Header() {
  return (
    <div className={style.headerBlock}>
        <div className={style.header}>
          <Nav />
          <BurgerNav />
          <MySocialNetworks />
        </div>
    </div>
  );
}

export default Header;
