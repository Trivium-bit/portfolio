import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.css'
import Skill from './skill/Skill'
import Title from '../common/components/title/Title';
import { faReact, faJsSquare, faHtml5, faGitAlt, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

/* import reactLogo from '../assets/icons/react.png';
import jsLogo from '../assets/icons/js.png';
import html5Logo from '../assets/icons/html5.png';
import typescriptIcon from '../assets/icons/typescript_icon.png';
import gitHubLogo from '../assets/icons/github.png';
import reduxLogo from '../assets/icons/redux.png';
import cssLogo from '../assets/icons/css.png'; */


const skills = {
  react: {
    icon: faReact,
    title: "React",
    description: "JavaScript is a scripting languaanguage that en enables you to create dynamically updating content, control multimedia, animate images...",
  },
  javascript: {
    icon: faJsSquare,
    title: "JavaScript",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describingguage used foon of a document written in a markup guage used foTML.",
  },
  typescript: {
    logo: "simple-icons:typescript",
    title: "TypeScript",
    description: "is a style sheet language used for describing the presentation of",
  },
  redux: {
    logo: "akar-icons:redux-fill",
    title: "Redux",
    description: "iguage used fonguage used forguage used foguage used fotianguage thaables you to createting conteting conteot is a scriptn of",
  },
  gitHub: {
    icon: faGitAlt,
    title: "Git",
    description: "heets (CSS) is a style sheet language used describing the presentation of a d",
  }, 
  html5: {
    icon: faHtml5,
    title: "HTML 5",
    description: "This is where things get a little fuzzy and you ",
  },
  css: {
    icon: faCss3Alt,
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
          <Skill icon={skills.react.icon} title={skills.react.title} description={skills.react.description} />
          <Skill icon={skills.javascript.icon} title={skills.javascript.title} description={skills.javascript.description} />
          <Skill logo={skills.redux.logo} title={skills.redux.title} description={skills.redux.description} />
          <Skill logo={skills.typescript.logo} title={skills.typescript.title} description={skills.typescript.description} />
          <Skill icon={skills.gitHub.icon} title={skills.gitHub.title} description={skills.gitHub.description} />
          <Skill icon={skills.html5.icon} title={skills.html5.title} description={skills.html5.description} />
          <Skill icon={skills.css.icon} title={skills.css.title} description={skills.css.description} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
