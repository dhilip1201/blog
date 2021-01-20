import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <>
          <div className="container">
          {props.children}
          <Sidebar />
      </div>
    <div className="footer-head">

        <h4>2021@blog</h4>
    </div>
      </>
    
   )

 }

export default Layout