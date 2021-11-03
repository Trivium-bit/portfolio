import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../common/styles/Container.module.css'

const socialNetwork = {
  linkedin: {
    name: "Linkedin",
    img: "...",
    url: "..."
  },
  github: {
    name: "Github",
    img: "...",
    url: "..."
  },
  telegram: {
    name: "Telegram",
    img: "...",
    url: "..."
  },
  instagram: {
    name: "Instagram",
    img: "...",
    url: "..."
  }, 
}

function Footer() {
  return (
    <div className={style.footerBlock}>
    <div className={`${styleContainer.container} ${style.footerContainer}`}>        
    <span className={style.title}>Baliankou Vitali</span>
    <div className={style.messengersBlock }>
    <div className={style.messenger}>{socialNetwork.linkedin.img}</div>
    <div className={style.messenger}>{socialNetwork.github.img}</div>
    <div className={style.messenger}>{socialNetwork.telegram.img}</div>
    <div className={style.messenger}>{socialNetwork.instagram.img}</div>
    </div>
    <span>@ 2021 All rights reserved </span>
     
    </div>
    </div>
  );
}

export default Footer;
