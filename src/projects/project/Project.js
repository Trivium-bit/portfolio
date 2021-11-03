import React from 'react';
import style from './Project.module.css';


function Project(props) {
  return (
    <div className={style.project}>
    <div className={style.img}>
    <img src={props.img} alt={props.alt}></img>
    <button className={style.button}>View</button>
     </div> 
    <h4>{props.title}</h4>
    <span className={style.description}>{props.description}</span>
    
    </div>
   
  );
}

export default Project;
