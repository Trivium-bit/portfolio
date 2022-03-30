import React from 'react';
import style from './HideMe.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from '../common/components/Title';
import Contacts from '../contacts/Contacts';

function HideMe() {
  return (
    <div className={style.hideMeBlock}>
      <div className={`${styleContainer.container} ${style.hideMeContainer}`}>
        <div className={style.contacts}>
        <Title text={"Hide Me"} description={"I am available for office and distancework. Connect with me via phone: 01923 088574 or email: admin@example.com"} />
        <Contacts />
        </div>
        <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default HideMe;
