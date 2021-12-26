import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => <footer className={classes.footer}>
   <div className = {classes.fakeUI}>
        <img src='assets/images/footer/footer.png' alt='Footer' /> 
    </div>
</footer>;

export default Footer;