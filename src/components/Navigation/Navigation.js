import React from 'react';
import navStyles from './navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className={navStyles.list}>
        <li className={navStyles.element}>
          <NavLink to="/" className={navStyles.link}>Профиль</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navStyles.link}>О нас</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;