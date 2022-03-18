import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
      <div className={style.greetings}>
        <span>Hi There</span>
        <h1 className={style.title}>I am Baliankou Vitali</h1>
        <p>Frontend Developer</p>
      </div>
      <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default Main;
