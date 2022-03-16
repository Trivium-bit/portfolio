import React from 'react';
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <span className={style.title}>Contacts</span>
        <form className={style.form}>
          <input type="text" placeholder="Name"></input>
          <input type="text" placeholder="E-mail"></input>
          <textarea placeholder="message"></textarea>
        </form>
        <button type="submit" className={style.button}>Send</button>

      </div>
    </div>
  );
}

export default Contacts;
