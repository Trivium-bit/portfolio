import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss'
import Skill from './skill/Skill'
import Title from '../common/components/title/Title';
import { faReact, faJsSquare, faHtml5, faGitAlt, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

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
    description: "heets (Cge used fogn style sheet lage used fogndescribing the presentation of a d",
  }, 
  html5: {
    icon: faHtml5,
    title: "HTML 5",
    description: "This is where things get a little fuzzy and you ",
  },
  css: {
    icon: faCss3Alt,
    title: "CSS",
    description: "eets (CSS) is a style sheet language ustyle sheet ge used fogng thege used fognused fogresu ",
  },
  materialUI: {
    logo: "mdi:material-ui",
    title: "MaterialUI",
    description: "Axios tge used fogntyle sheet tyle sheege used fogntyle sheet ge used fognyle ge used fogn ",
  },
  styledComponents: {
    logo: "file-icons:styledcomponents",
    title: "Styled-components",
    description: "Styled-components has quickly become my favorite library for React, so much so, that when I watch a tutoria",
  },
  antDesign: {
    logo: "ant-design:ant-design-outlined",
    title: "AntDesign",
    description: "(CSS) is a style sheet language used for describingguaged fog(CSS) is a style sheet language used for describingguageeet ge used fognyle ge used fogn ",
  },
  postman: {
    logo: "simple-icons:postman",
    title: "Postman",
    description: "s where things get a litsheet tyle ss where things get a lits  lits where things get a litused fogntyle sheet ge used fognyle ge used fogn ",
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
          <Skill logo={skills.materialUI.logo} title={skills.materialUI.title} description={skills.materialUI.description} />
          <Skill logo={skills.styledComponents.logo} title={skills.styledComponents.title} description={skills.styledComponents.description} />
          <Skill logo={skills.antDesign.logo} title={skills.antDesign.title} description={skills.antDesign.description} />
          <Skill logo={skills.postman.logo} title={skills.postman.title} description={skills.postman.description} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
