import React from 'react';
import style from './Skill.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

function Skill(props) {

  if (props.icon) {
    return (
      <div className={style.skill}>
        <div className={style.logo}>
          <FontAwesomeIcon icon={props.icon} className={style.icon} />
        </div>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}> {props.description} </span>
      </div>)
  } else {
    return (
      <div className={style.skill}>
        <div className={style.logo}>
          <Icon icon={props.logo} className={style.icon} />
        </div>
        <h3 className={style.title}>{props.title}</h3>
        <span className={style.description}> {props.description} </span>
      </div>
    )
  }
}

export default Skill;
