import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';

const particlesOpt = {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "speed": 4,
        "size_min": 0.3
      }
    },
    "line_linked": {
      "enable": false
    },
    "color": {
      value: "#f9004d"
    },
    "move": {
      "random": true,
      "speed": 1,
      "direction": "top",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "duration": 2,
        "size": 0,
        "opacity": 0
      },
      "repulse": {
        "distance": 400,
        "duration": 4
      }
    }
  }
};

function Main() {
  return (
    <div className={style.mainBlock}>
      <Particles className={style.particles} params={particlesOpt} />
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
