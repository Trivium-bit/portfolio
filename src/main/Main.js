import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';

const particlesOpt = {
  "particles": {
    "number": {
        "value": 80,
        "density": {
            "enable": true,
            "value_area": 1800
        }
    },
    "line_linked": {
        "enable": true,
        "opacity": 0.02
    },
    "move": {
        "direction": "right",
        "speed": 1
    },
    "size": {
        "value": 2
    },
    "opacity": {
        "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.05
        }
    },
    "color": {
      "value": "#ff9ab8"
  }
},
"interactivity": {
    "events": {
        "onclick": {
            "enable": true,
            "mode": "push"
        }
    },
    "modes": {
        "push": {
            "particles_nb": 1
        }
    }
},
"retina_detect": true
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
