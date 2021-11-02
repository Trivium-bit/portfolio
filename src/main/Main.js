import React from 'react';
import style from './Main.module.css';

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.container}>
      <div className={style.greetings}>
        <span>Hi There</span>
        <h1>I am Bolenkov Vitali</h1>
        <p>Frontend Developer</p>
      </div>
      <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default Main;
