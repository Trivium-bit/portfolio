import React from 'react';
import style from './Header.module.css';
import Nav from './../nav/Nav'
import Social from '../social/Social';

function Header() {
  return (
    <div className={style.header}>
        <Nav />
        <Social />
    </div>
  );
}

export default Header;
