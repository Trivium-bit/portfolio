import React from 'react';
import style from './Header.module.scss';
import Nav from './../nav/Nav'
import MySocialNetworks from '../common/components/mySocialNetworks/MySocialNetworks';

function Header() {
  return (
    <div className={style.header}>
        <Nav />
        <MySocialNetworks />
    </div>
  );
}

export default Header;
