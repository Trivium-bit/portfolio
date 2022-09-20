import React from 'react';
import style from './Title.module.scss'
import Band from './band/Band'

function Title(props) {
  return (
    <div className={style.title}>
      <h2>{props.text}</h2>
      <Band />
      <span>{props.description}</span>
    </div>
  )
}
 
export default Title;
