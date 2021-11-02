import React from 'react';
import style from './Project.module.css';


function Project(props) {
  return (
    <div className={style.project}>
    <div className={style.icon}><img src="https://example.com/photo/low.jpg" alt={props.title}></img> </div>
    <h4>{props.title}</h4>
  <span className={style.description}>{props.description}</span>
    </div>
   
  );
}

export default Project;
