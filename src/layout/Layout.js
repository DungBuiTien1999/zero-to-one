import MainNavigation from './MainNavigation';
import Footer from './Footer';
import classes from './layout.module.scss'
import React from 'react';

function Layout({ children}) {
  return (
    <div style={{ padding: "0 !important", margin: "0 !important" }}>
      <MainNavigation />
      <div className = { classes.container }>
        { children }
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
