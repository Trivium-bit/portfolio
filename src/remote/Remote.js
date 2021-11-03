import React from 'react';
import style from './Remote.module.css';
import styleContainer from './../common/styles/Container.module.css'

function Remote() {
  return (
    <div className={style.remoteBlock}>
    <div className={`${styleContainer.container} ${style.remoteContainer}`}>        
    <span className={style.title}>Рассматриваю вариант удаленной работы</span>
    <button className={style.button}>Нанять меня</button>
     
    </div>
    </div>
  );
}

export default Remote;
