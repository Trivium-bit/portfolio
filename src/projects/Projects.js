import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/Title';
import SocialImage from '../assets/image/social_network.jpg';
import TodoImage from '../assets/image/Todolist.jpg';
import WeatherForecast from '../assets/image/weather_forecast.jpg';

const projets = {
  socialNetwork: {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Social Network",
    description: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images...",
  },
  todolist: {
    url: "https://intersog.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-14-at-3.44.02-PM-e1492176136977.png",
    title: "Todolist",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  },
  weatherForecast: {
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
  const weatherForecast ={
    backgroundImage: `url(${WeatherForecast})`,
  };

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Title text={"Projets"} description={"my latest projects "} />
        <div className={style.projects}>
          <Project style={social} title={projets.socialNetwork.title} description={projets.socialNetwork.description} url={projets.socialNetwork.url} />
          <Project style={todolist} title={projets.todolist.title} description={projets.todolist.description} url={projets.todolist.url} />
          <Project style={weatherForecast} title={projets.weatherForecast.title} description={projets.weatherForecast.description} url={projets.weatherForecast.url} />
        </div>
      </div>
    </div>

  );
}

export default Projects;
