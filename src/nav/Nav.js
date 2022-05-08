import React from 'react';
import style from './Nav.module.css';
import logo from '../assets/icons/logo.png';

function Nav() {
  return (
    <div className={style.nav}>
      <img className={style.logo} src={logo} alt="logo" />
      <li><a href=" ">Главная</a></li>
      <li><a href=" ">Скиллы</a></li>
      <li><a href=" ">Проекты</a></li>
      <li><a href=" ">Контакты</a></li>
    </div>
  );
}

export default Nav;
