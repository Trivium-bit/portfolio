import React from 'react';
import style from './Main.module.scss';
import ParticlesComponent from '../common/particles/Particles';
import ReactTypingEffect from 'react-typing-effect';
import foto from '../assets/icons/materialUi.png';
import Tilt from 'react-parallax-tilt';

function Main() {
  return (
    <div id="main" className={style.mainBlock}>
      <div className={style.mainContainer}>
        <ParticlesComponent />
        <div className={style.greetings}>
          <span>Hi There</span>
          <h1>I am Baliankou Vitali</h1>
          <ReactTypingEffect
            text={"Frontend Developer"} cursorClassName={style.cursor}
          />
        </div>
        <Tilt transitionSpeed={3000}>
          <img className={style.foto} src={foto} alt={"mainFoto"} />
        </Tilt>
      </div>
    </div>
  );
}

export default Main;
