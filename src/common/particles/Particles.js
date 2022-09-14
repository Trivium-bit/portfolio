import Particles from 'react-particles-js';
import style from './Particles.module.scss';

export const particlesOpt = {
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
            "opacity": 0.0001
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

function ParticlesComponent() {
    return (
        <div>
            <Particles className={style.particles} params={particlesOpt} />
        </div>
    );
}

export default ParticlesComponent


