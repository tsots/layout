import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './_Toolbar.scss';

const toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar__logo'>
        <Link to='/'>THE LOGO</Link>
      </div>
      <div className='toolbar__navigation-items'>
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
      </div>
    </nav>
  </header>
);

export default toolbar;
