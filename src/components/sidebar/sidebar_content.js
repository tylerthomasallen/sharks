import React from 'react';
// import Title from '../title';
// import SidebarUser from './sidebar_user';
import PropTypes from 'prop-types';

const SidebarContent = ( { closeSidebar } ) => {

  return(
    <div className="sidebar-background">
    
      <div className="sidebar-container">
  
        <div className="sidebar-title">
          {/* <Title text="Giphagram" /> */}
          <h3>Monterey Sharks</h3>
          <i className="fas fa-times" onClick={closeSidebar}></i>
        </div>
  
          <a href="#" onClick={closeSidebar}>
          <i className="fas fa-home" /> Home
          </a>
  
        {/* <Link to={'/search'} onClick={closeSidebar}> */}
          <i className="fas fa-search" />
          Search
        {/* </Link> */}
        
        {/* <Link to={'/favorites'} onClick={closeSidebar}> */}
          <i className="fas fa-heart" />
          Favs
        {/* </Link> */}

      </div>

      <div className="sidebar-outer" onClick={closeSidebar}>
      </div>

    </div>
  )
}

SidebarContent.propTypes = ({
  closeSidebar: PropTypes.func.isRequired
})

export default SidebarContent;