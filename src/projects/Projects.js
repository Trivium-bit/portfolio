import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from './project/Project'

function Projects() {
  return (
    <div className={style.projectsBlock}>
     <div className={`${styleContainer.container} ${style.projectsContainer}`}>
       <h2 className={style.title}>My projects</h2>
       <div className={style.projects}>
         <Project title={"Social Network"} description={"JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images..."}/>
         <Project title={"Todolist"} description={"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."}/>
         <Project title={"Weather Forecast "} description={"This is where things get a little fuzzy and you better have your lexical scope wits about ... So what does this mean for React."}/>
       </div>
     </div>
    </div>
   
  );
}

export default Projects;
