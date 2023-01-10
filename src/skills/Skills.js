import React, { useState } from 'react';
import style from './Skills.module.scss';
import styleContainer from './../common/styles/Container.module.scss'
import Skill from './skill/Skill'
import Title from '../common/components/title/Title';
import { faReact, faJsSquare, faHtml5, faGitAlt, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';

const skills = [
  {
    icon: faReact,
    title: "React",
    description: "React is the premier way to build big, fast Web apps with JavaScript. It has scaled very well.",
  },
  {
    icon: faJsSquare,
    title: "JavaScript",
    description: "JavaScript is used to create interactive web pages, mobile applications, and server-side development.",
  },
  {
    logo: "simple-icons:typescript",
    title: "TypeScript",
    description: "TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, on any OS. ",
  },
  {
    logo: "akar-icons:redux-fill",
    title: "Redux",
    description: "Redux is an open source JavaScript library for managing application state.",
  },
  {
    icon: faGitAlt,
    title: "Git",
    description: "Git is a version control system that helps you track the history of changes to files.",
  },
  {
    icon: faHtml5,
    title: "HTML 5",
    description: "HTML5 is a new version of the HTML standard and markup language for working with new multimedia elements and applications.",
  },
  {
    icon: faCss3Alt,
    title: "CSS",
    description: "Cascading Style Sheets is a formal language for describing the appearance of a web page written using a markup language.",
  },
  {
    logo: "dashicons:rest-api",
    title: "REST API",
    description: "A REST API is a way for two computer systems to communicate using the HTTP technologies found in web browsers and servers.",
  },
  {
    logo: "simple-icons:postman",
    title: "Postman",
    description: "Postman is an API platform for building and consuming APIs. Postman streamlines collaboration so you can build better APIs faster.",
  },
  {
    logo: "cib:jest",
    title: "JEST",
    description: "Jest is an amazing JavaScript testing framework with a focus on simplicity. Works with projects using Babel, TypeScript, Node, React, Angular, Vue and more!",
  },
  {
    logo: "mdi:material-ui",
    title: "MaterialUI",
    description: "Material UI is an open-source React component library that implements Google's Material Design.",
  },
  {
    logo: "file-icons:styledcomponents",
    title: "Styled-components",
    description: "Styled-components has quickly become my favorite library for React. One of the most important problems they solve is selector name collisions.",
  },
  /*   {
      logo: "ant-design:ant-design-outlined",
      title: "AntDesign",
      description: "Ant Design is a complete design system and has two features that set it apart from similar libraries: tables and forms.",
    }, */
]

function Skills() {

  const [showDescriptions, setDescription] = useState(false);

  let showDescriptionClick = () => {
    setDescription(!showDescriptions);
    console.log(showDescriptions)
  }
  return <>
    <div id="skills" className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Fade bottom>
          <Title text={"Skills"} description={"My skills that I have "} />
          <div className={style.showDscr}>
            <h2>show skill description</h2>
            <Icon icon="bi:arrow-down-circle-fill" className={style.icon} onClick={showDescriptionClick}/>
            </div>
          <div className={style.skills}>
            {skills.map((sk) => {
              if (showDescriptions) {
              return (
                <Skill icon={sk.icon} logo={sk.logo} title={sk.title} description={sk.description} />
              )
              } else {
                return (
                  <Skill icon={sk.icon} logo={sk.logo} title={sk.title}/>
                )
              }
            })}
          </div>
        </Fade>
      </div>
    </div>
  </>
}

export default Skills;
