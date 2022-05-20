import React from 'react';
import style from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

function Skill(props) {

  if (props.icon) {
    return (
      <div className={style.skill}>
        <FontAwesomeIcon icon={props.icon} className={style.icon} />
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>)
  } else {
    return (
      <div className={style.skill}>
        <Icon icon={props.logo} className={style.icon}/>
        <h3>{props.title}</h3>
        <span> {props.description} </span>
      </div>
    )
  }
}

export default Skill;
