import React from 'react';
import style from './Social.module.css'
import { Icon } from '@iconify/react';


function Social() {
  return (
    <div className={style.social}>
    <li><a href=" "><Icon icon="akar-icons:instagram-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href="https://www.linkedin.com/in/vitali-baliankou-b856051b9/"><Icon icon="akar-icons:linkedin-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href="https://github.com/Trivium-bit"><Icon icon="akar-icons:github-fill" className={style.icon} width="24" height="24" /></a> </li>
    <li><a href="https://www.codewars.com/users/Trivium"><Icon icon="cib:codewars" className={style.icon} width="24" height="24" /></a> </li>
    </div>
  );
}

export default Social;
