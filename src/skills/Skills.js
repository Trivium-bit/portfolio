import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss'
import Skill from './skill/Skill'
import Title from '../common/components/title/Title';
import { faReact, faJsSquare, faHtml5, faGitAlt, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const skills = [
  {
    icon: faReact,
    title: "React",
    description: "JavaScript is a scripting languaanguage that en enables you to create dynamically updating content, control multimedia, animate images...",
  },
  {
    icon: faJsSquare,
    title: "JavaScript",
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describingguage used foon of a document written in a markup guage used foTML.",
  },
  {
    logo: "simple-icons:typescript",
    title: "TypeScript",
    description: "is a style sheet language used for describing the presentation of",
  },
  {
    logo: "akar-icons:redux-fill",
    title: "Redux",
    description: "iguage used fonguage used forguage used foguage used fotianguage thaables you to createting conteting conteot is a scriptn of",
  },
  {
    icon: faGitAlt,
    title: "Git",
    description: "heets (Cge used fogn style sheet lage used fogndescribing the presentation of a d",
  },
  {
    icon: faHtml5,
    title: "HTML 5",
    description: "This is where things get a little fuzzy and you ",
  },
  {
    logo: "dashicons:rest-api",
    title: "REST API",
    description: "Thiadasdasdas is whesdasdasdasre things get a little fuzzy and you ",
  },
  {
    icon: faCss3Alt,
    title: "CSS",
    description: "eets (CSS) is a style sheet language ustyle sheet ge used fogng thege used fognused fogresu ",
  },
  {
    logo: "mdi:material-ui",
    title: "MaterialUI",
    description: "Axios tge used fogntyle sheet tyle sheege used fogntyle sheet ge used fognyle ge used fogn ",
  },
  {
    logo: "file-icons:styledcomponents",
    title: "Styled-components",
    description: "Styled-components has quickly become my favorite library for React, so much so, that when I watch a tutoria",
  },
  {
    logo: "ant-design:ant-design-outlined",
    title: "AntDesign",
    description: "(CSS) is a style sheet language used for describingguaged fog(CSS) is a style sheet language used for describingguageeet ge used fognyle ge used fogn ",
  },
  {
    logo: "simple-icons:postman",
    title: "Postman",
    description: "s where things get a litsheet tyle ss where things get a lits  lits where things get a litused fogntyle sheet ge used fognyle ge used fogn ",
  }
]

function Skills() {
  return <>
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Fade bottom>
          <Title text={"Skills"} description={"My skills that I have "} />
          <div className={style.skills}>
            {skills.map((sk) => {
              return (
                <Skill icon={sk.icon} logo={sk.logo} title={sk.title} description={sk.description} />
              )
            })}
          </div>
        </Fade>
      </div>
    </div>
  </>
}

export default Skills;
