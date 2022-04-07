import React from 'react';
import style from './Social.module.css'
import { Icon } from '@iconify/react';


function Social() {
  return (
    <div className={style.social}>
    <li><a href=" "><Icon icon="https://www.instagram.com/trivium.exe/b89d7s8as/" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href="https://www.linkedin.com/in/vitali-baliankou-b856051b9/"><Icon icon="akar-icons:linkedin-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href=" "><Icon icon="akar-icons:facebook-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href=" "><Icon icon="akar-icons:twitter-fill" className={style.icon} width="24" height="24" /></a> </li>
    </div>
  );
}

export default Social;
