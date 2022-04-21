import React from 'react';
import style from './Footer.module.css';
import SocialNetworks from './../common/components/socialNetworks/SocialNetworks';
import styleContainer from './../common/styles/Container.module.css'

function Footer() {
  return (
    <div className={style.footerBlock}>
    <div className={`${styleContainer.container} ${style.footerContainer}`}>        
    <div className={style.title}>Baliankou Vitali</div>
    <div className={style.messengersBlock }>
    <SocialNetworks />
    </div>
    <div className={style.copyright}>@ 2021 All rights reserved </div>
     
    </div>
    </div>
  );
}

export default Footer;
