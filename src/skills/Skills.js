import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from './skill/Skill'
import Title from '../common/components/Title';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import reactLogo from '../assets/icons/react.png';
import jsLogo from '../assets/icons/js.png';
import html5Logo from '../assets/icons/html5.png';
import typescriptLogo from '../assets/icons/typescript.png';
import gitHubLogo from '../assets/icons/github.png';
import reduxLogo from '../assets/icons/redux.png';
import cssLogo from '../assets/icons/css.png';


const skills = {
  react: {
    logo: reactLogo,
    title: "React",
    description: "JavaScript is a scripting languaanguage that en enables you to create dynamically updating content, control multimedia, animate images...",
  },
  javascript: {
    logo: jsLogo,
    title: "JavaScript",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describingguage used foon of a document written in a markup guage used foTML.",
  },
  typescript: {
    logo: typescriptLogo,
    title: "TypeScript",
    description: "is a style sheet language used for describing the presentation of",
  },
  redux: {
    logo: reduxLogo,
    title: "Redux",
    description: "iguage used fonguage used forguage used foguage used fotianguage thaables you to createting conteting conteot is a scriptn of",
  },
  gitHub: {
    logo: gitHubLogo,
    title: "Git",
    description: "heets (CSS) is a style sheet language used describing the presentation of a d",
  }, 
  html5: {
    logo: html5Logo,
    title: "HTML5",
    description: "This is where things get a little fuzzy and you ",
  },
  css: {
    logo: cssLogo,
    title: "CSS",
    description: "eets (CSS) is a style sheet language used describiuage used fogng the puage used fogresu ",
  },
  css: {
    logo: cssLogo,
    title: "CSS",
    description: "eets (CSS) is a style sheet language used describiuage used fogng the puage used fogresu ",
  },
  
}

function Skills() {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title text={"Skills"} description={"My skills that I have "} />
        <div className={style.skills}>
          <Skill logo={skills.react.logo} title={skills.react.title} description={skills.react.description} />
          <Skill logo={skills.javascript.logo} title={skills.javascript.title} description={skills.javascript.description} />
          <Skill logo={skills.typescript.logo} title={skills.typescript.title} description={skills.typescript.description} />
          <Skill logo={skills.redux.logo} title={skills.redux.title} description={skills.redux.description} />
          <Skill logo={skills.gitHub.logo} title={skills.gitHub.title} description={skills.gitHub.description} />
          <Skill logo={skills.html5.logo} title={skills.html5.title} description={skills.html5.description} />
          <Skill logo={skills.css.logo} title={skills.css.title} description={skills.css.description} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
