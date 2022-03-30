import React from 'react';
import style from './Project.module.scss';


function Project(props) {
  return (
    <div className={style.project}>
      <a className={style.image} style={props.style} href={props.url}>
        {/* <a href={props.url} className={style.button}>VIEW</a> */}
      </a>
      <h4 className={style.projectTitle}>{props.title}</h4>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}

export default Project;
