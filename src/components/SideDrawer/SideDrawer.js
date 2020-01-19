import React from 'react';
import { Link } from 'react-router-dom';

import './_SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/About'>ABOUT</Link>
        </li>
        <li>
          <Link to='Identity'>IDENTITY</Link>
        </li>
        <li>
          <Link to='Digital'>DIGITAL</Link>
        </li>
        <li>
          <Link to='Contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
