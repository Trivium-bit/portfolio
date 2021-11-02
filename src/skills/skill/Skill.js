import React from 'react';
import style from './Skill.module.css';


function Skill(props) {
  return (
    <div className={style.skill}>
    <div className={style.icon}>
   <h3>{props.title}</h3>
   </div>
    </div>
   
  );
}

export default Skill;
