import React from 'react';
import style from './HireMe.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from '../common/components/title/Title';
import Contacts from '../contacts/Contacts';

function HireMe() {
  return (
    <div className={style.hideMeBlock}>
      <div className={`${styleContainer.container} ${style.hideMeContainer}`}>
        <div className={style.contacts}>
        <Title text={"Hire Me"} description={"I am available for office and distancework. Connect with me via phone: +375(29) 131-95-42 or email: trivium.exe@gmail.com"} />
        <Contacts />
        </div>
        <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default HireMe;
