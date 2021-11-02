import React from 'react';
import style from './Project.module.css';


function Project(props) {
  return (
    <div className={style.project}>
    <div className={style.img}>
    <img src="https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png" alt={props.title}></img> </div> 
    <h4>{props.title}</h4>
  <span className={style.description}>{props.description}</span>
    </div>
   
  );
}

export default Project;
