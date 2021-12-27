import React, { useState } from "react";
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import StudentNavbar from './studentNavbar';
import GuestNavbar from './guestNavbar';
import { useEffect } from 'react';
import { ROLE_STUDENT } from '../../redux/constants/common'; 

function MainNavigation() {
  const [header, setHeader] = useState({
    isAuth: false,
    role: 0,
    fullname: "",
    img_source: ""
  })

  useEffect(function(){
    const isauth = localStorage.getItem("isAuth") === "true";
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
    setHeader({ isAuth: isauth, role: role, fullname: username, img_source: ""});
  },[])

  return (
    <nav className={classes.header}>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/" className={classes.logo}>
              <img src='assets/images/header/Logo.png' alt="logo header" />
            </Link>
          </li>
          <li>
            <Link to='/' className={`waves-light btn ${classes.module}`}>
              Khóa Học
            </Link>
          </li>
          <li>
            <Link to="#" className={`waves-effect waves-light btn ${classes.module}`}>
              Doanh Nghiệp
            </Link>
          </li>
          <li>
            <Link to="#" className={`waves-effect waves-light btn ${classes.module}`}>
              Bảng xếp hạng
            </Link>
          </li>
          <li className={classes.search}>
            <form style={{ display: "flex", position: "relative" }}>
              <input type="text" placeholder="Tìm kiếm khóa học"/>
              <i className={`material-icons  ${classes.searchIcon}`}>search</i>
            </form>
          </li>
        </ul>

        {/* Chưa đăng nhập */}
        { !header.isAuth && <GuestNavbar /> }

        {/*Đã đăng nhập - Student */}
        { header.isAuth && +header.role === ROLE_STUDENT && <StudentNavbar {...header}/> }
      </div>
    </nav>
  );
}

export default MainNavigation;
