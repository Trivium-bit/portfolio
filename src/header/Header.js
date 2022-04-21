import React from 'react';
import style from './Header.module.css';
import Nav from './../nav/Nav'
import SocialNetworks from '../common/components/socialNetworks/SocialNetworks';

function Header() {
  return (
    <div className={style.header}>
        <Nav />
        <SocialNetworks />
    </div>
  );
}

export default Header;
