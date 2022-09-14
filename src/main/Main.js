import React from 'react';
import style from './Main.module.scss';
import ParticlesComponent from '../common/particles/Particles';

function Main() {
  return (
    <div className={style.mainBlock}>
      <ParticlesComponent />
      <div className={style.mainContainer}>
        <div className={style.greetings}>
          <span>Hi There</span>
          <h1>I am Baliankou Vitali</h1>
          <h2>Frontend Developer</h2>
          <p>from Minsk.</p>
        </div>
        <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default Main;
