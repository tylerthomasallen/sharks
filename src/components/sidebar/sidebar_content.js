import React from 'react';
// import Title from '../title';
// import SidebarUser from './sidebar_user';
import PropTypes from 'prop-types';

const SidebarContent = ( { closeSidebar } ) => {

  return(
    <div className="sidebar-background">
    
      <div className="sidebar-container">
  
        <div className="sidebar-title">
          <a href="#" onClick={closeSidebar}>
            <h3>Monterey Sharks</h3>
          </a>
          <i className="fas fa-times" onClick={closeSidebar}></i>
        </div>
  
        <a href="#" onClick={closeSidebar}>
          <i className="fas fa-home" />
          <p>Home</p>
        </a>

        <a href="#video" onClick={closeSidebar}>
         <i class="fas fa-video" />
         <p>Video</p>
        </a>

        <a href="#tournament" onClick={closeSidebar}>
          <i class="fas fa-mountain" />
          <p>Tahoe Tournament</p>
        </a>


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