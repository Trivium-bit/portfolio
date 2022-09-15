import React from 'react';
import style from './Main.module.scss';
import ParticlesComponent from '../common/particles/Particles';
import ReactTypingEffect from 'react-typing-effect';

function Main() {
  return (
    <div className={style.mainBlock}>
      <ParticlesComponent />
      <div className={style.mainContainer}>
        <div className={style.greetings}>
          <span>Hi There</span>
          <h1>I am Baliankou Vitali</h1>
          <ReactTypingEffect
          text={"Frontend Developer"} cursorClassName={style.cursor}
      />
        {/*  <h2>Frontend Developer</h2> */}
        </div>
        <div className={style.foto}>foto</div>
      </div>
    </div>
  );
}

export default Main;
