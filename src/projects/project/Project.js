import React from 'react';
import style from './Project.module.css';


function Project(props) {
  return (
    <div className={style.project}>
    <div className={style.imgContainer}>
    <img className={style.img} src={props.img} alt={props.alt}></img>
    <a href={props.url} className={style.button}>VIEW</a>
    </div> 
    <h4>{props.title}</h4>
    <span className={style.description}>{props.description}</span>
    
    </div>
   
  );
}

export default Project;
