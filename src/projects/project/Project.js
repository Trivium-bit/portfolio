import React from 'react';
import style from './Project.module.scss';


function Project(props) {
  return (
    <div className={style.projectContainer}>
      <a className={style.image} image={props.image} href={props.url}></a>
      <div className={style.project}>
        <h4 className={style.projectTitle}>{props.title}</h4>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  );
}

export default Project;
