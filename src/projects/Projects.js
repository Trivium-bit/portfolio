import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from './project/Project'

const projets = {
  project1: {
    title: "Social Network",
    img: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    alt: "Social Network",
    description: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images..."
  },
  project2: {
    title: "Todolist",
    img: "https://media.gettyimages.com/photos/to-do-list-on-notebook-page-with-laptop-and-coffee-mug-picture-id1077341604?s=612x612",
    alt: "Todolist",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML."
  },
  project3: {
    title: "Weather Forecast",
    img: "https://media.istockphoto.com/vectors/vectot-weather-widget-for-smartphone-vector-id475696742?k=20&m=475696742&s=612x612&w=0&h=UD0dyd1VRDkBtI2EvsKNpyB79aNTbE0fCcQXYoO_kAA=",
    alt: "Weather Forecast",
    description: "This is where things get a little fuzzy and you better have your lexical scope wits about ... So what does this mean for React."
  }
}

function Projects() {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <h2 className={style.title}>My projects</h2>
        <div className={style.projects}>
          <Project title={projets.project1.title} img={projets.project1.img} alt={projets.project1.alt} description={projets.project1.description} />
          <Project title={projets.project2.title} img={projets.project2.img} alt={projets.project2.alt} description={projets.project2.description} />
          <Project title={projets.project3.title} img={projets.project3.img} alt={projets.project3.alt} description={projets.project3.description} />
        </div>
      </div>
    </div>

  );
}

export default Projects;
