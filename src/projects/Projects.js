import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../common/styles/Container.module.css'
import Project from './project/Project'
import Title from '../common/styles/components/Title';
import SocialImage from '../assets/image/social_network.jpg'
import TodoImage from '../assets/image/Todolist.jpg'

const projets = {
  socialNetwork: {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Social Network",
    description: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images...",
  },
  project2: {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Todolist",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
  project3: {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Weather Forecast",
    description: "This is where things get a little fuzzy and you ",
  }
}

function Projects() {
  
  const social = {
    backgroundImage: `url(${SocialImage})`,
  };
  const todolist = {
    backgroundImage: `url(${TodoImage})`,
  };

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title text={"Projets"} description={"my latest projects "} />
        <div className={style.projects}>
          <Project style={social} title={projets.socialNetwork.title} description={projets.socialNetwork.description} url={projets.socialNetwork.url} />
          <Project style={todolist} title={projets.project2.title} description={projets.project2.description} url={projets.project2.url} />
          <Project title={projets.project3.title} description={projets.project3.description} url={projets.project3.url} />
        </div>
      </div>
    </div>

  );
}

export default Projects;
