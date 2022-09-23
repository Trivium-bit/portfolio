import React from 'react';
import style from './Project.module.scss';


function Project(props) {
  return (
    <div className={style.projectContainer}>
      <p><a href={props.url}><img className={style.image} src={props.image} href={props.url} alt={props.alt} /></a></p>
      <div className={style.project}>
        <h4 className={style.projectTitle}>{props.title}</h4>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
