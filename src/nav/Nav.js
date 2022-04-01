import React from 'react';
import style from './Nav.module.css';
import logo from '../assets/icons/logo.png';

function Nav() {
  return (
    <div className={style.nav}>
      <img className={style.logo} src={logo} alt="logo" />
      <li className={style.menu}><a href=" ">Главная</a></li>
      <li className={style.menu}><a href=" ">Скиллы</a></li>
      <li className={style.menu}><a href=" ">Проекты</a></li>
      <li className={style.menu}><a href=" ">Контакты</a></li>
    </div>
  );
}

export default Nav;
