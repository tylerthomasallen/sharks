import React from 'react';
import SidebarContainer from '../sidebar';
// import Title from '../title';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar-container">
      <SidebarContainer />
      <a href="#">
        <h3>Monterey Sharks</h3>
      </a>
    </div>
  )
}

export default NavBar;