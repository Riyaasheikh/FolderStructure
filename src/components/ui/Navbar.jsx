import React from 'react';
import { getNavConfig } from '../../utils/navConfig';

const NavBar = ({ type }) => {
  const navConfig = getNavConfig(type);

  return (
    <nav>
      <ul>
        {navConfig.links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button>{navConfig.button.label}</button>
    </nav>
  );
};

export default NavBar;