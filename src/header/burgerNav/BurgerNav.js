import React, { useState } from 'react';
import style from './BurgerNav.module.scss';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-scroll';

function BurgerNav() {

 const [menuIsOpen, setBurgerMenu] = useState(false);
 
  let onBurgerClick = () => {
    setBurgerMenu(!menuIsOpen);
  }

  return (
    <div className={style.burgerNav}>
      <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}`: style.burgerNavItems}>
      <img className={style.logo} src={logo} alt="logo" />
      <Link
        activeClass={style.active}
        to="main"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-10}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > Main
       </Link>
       <Link
        activeClass={style.active}
        to="skills"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-92}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > Skills
       </Link>
      <Link
        activeClass={style.active}
        to="projects"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-92}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > Projects
       </Link>
       <Link
        activeClass={style.active}
        to="contacts"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-92}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
      > Contacts
       </Link>
       </div>
       <div className={style.burgerBtn} onClick={onBurgerClick}></div>
    </div>
  );
}

export default BurgerNav;
