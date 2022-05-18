import React from 'react';
import style from './HireMe.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import Contacts from '../contacts/Contacts';

function HireMe() {
  return (
    <div className={style.hireMeBlock}>
      <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
        <div className={style.hireMeArea}>
        <div className={style.titleHireMe}>
        <Title text={"Hire Me"} description={"I am available for office and distancework. Connect with me via phone:\n+375(29) 131-95-42 or email: trivium.exe@gmail.com"} />
        </div>
        <div className={style.contacts}>
        <Contacts />
        </div>
        </div>
        <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default HireMe;
