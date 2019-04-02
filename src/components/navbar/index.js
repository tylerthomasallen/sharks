import React from 'react';
import SidebarContainer from '../sidebar';
// import Title from '../title';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar-container">
      <SidebarContainer />
      {/* <Link to="/trending"> */}
        {/* <Title text="Giphagram" /> */}
      <h3>Monterey Sharks</h3>
      {/* </Link> */}
    </div>
  )
}

export default NavBar;