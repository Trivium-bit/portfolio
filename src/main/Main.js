import React from 'react';
import style from './Main.module.scss';
import ParticlesComponent from '../common/particles/Particles';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';
import foto from '../assets/icons/materialUi.png'

function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.mainContainer}>
      <ParticlesComponent />
        <div className={style.greetings}>
          <span>Hi There</span>
          <h1>I am Baliankou Vitali</h1>
          <ReactTypingEffect
          text={"Frontend Developer"} cursorClassName={style.cursor}
      />
        </div>
        <Tilt className="Tilt" options={{ max : 25 }} >
       <img className={style.foto} src={foto}/>
        </Tilt>
       
      </div>
    </div>
  );
}

export default Main;
