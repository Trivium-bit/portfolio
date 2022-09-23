import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import SocialImage from '../assets/image/social_network.jpg';
import TodoImage from '../assets/image/Todolist.jpg';
import WeatherForecastImage from '../assets/image/weather_forecast.jpg';
import Fade from 'react-reveal/Fade';

const projets = [
  {
    url: "https://trivium-bit.github.io/social_network/",
    title: "Social Network",
    description: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images...",
    image: `${SocialImage}`,
  },
  {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Todolist",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    image: `${TodoImage}`,
  },
  {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Weather Forecast",
    description: "This is where things get a little fuzzy and you where things where things where things where things ",
    image: `${WeatherForecastImage}`,
  }
]

function Projects() {

  return (
    <div id="projects" className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Fade bottom>
          <Title text={"Projets"} description={"my latest projects "} />
          <div className={style.projects}>
            {projets.map((pr) => {
              return (
                <Project image={pr.image} title={pr.title} description={pr.description} url={pr.url} alt={pr.alt} />
              )
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
