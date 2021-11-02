import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Skill from './skill/Skill'

function Skills() {
  return (
    <div className={style.skillsBlock}>
     <div className={`${styleContainer.container} ${style.skillsContainer}`}>
       <h2 className={style.title}>Skills</h2>
       <div className={style.skills}>
         <Skill title={"JS"} description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images..."}/>
         <Skill title={"CSS"} description={"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."}/>
         <Skill title={"React"} description={"This is where things get a little fuzzy and you better have your lexical scope wits about ... So what does this mean for React."}/>
       </div>
     </div>
    </div>
   
  );
}

export default Skills;
