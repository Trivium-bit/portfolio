import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Contacts() {
  return (
    <div className={style.contactsBlock}>
    <div className={`${styleContainer.container} ${style.contactsContainer}`}>        
    <span className={style.title}>Контакты</span>
    <button className={style.button}>Отправить</button>
     
    </div>
    </div>
  );
}

export default Contacts;
