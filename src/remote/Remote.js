import React from 'react';
import style from './Remote.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Title from '../common/styles/components/Title';

function Remote() {
  return (
    <div className={style.remoteBlock}>
    <div className={`${styleContainer.container} ${style.remoteContainer}`}>
      < Title text={"Hide Me"} description={"I am available for office and distancework. Connect with me via phone:"}/>

    <span className={style.title}>Рассматриваю вариант удаленной работы</span>
    <button className={style.button}>Нанять меня</button>
     
    </div>
    </div>
  );
}

export default Remote;
