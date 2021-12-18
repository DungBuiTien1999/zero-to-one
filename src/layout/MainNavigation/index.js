import React, { useState } from "react";
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import StudentNavbar from './studentNavbar';
import LecturerNavbar from './lecturerNavbar';
import AdminNavbar from './adminNavbar';
import GuestNavbar from './guestNavbar';
import SearchNavbar from './searchNavbar';
import { useEffect } from 'react';
import {ROLE_STUDENT, ROLE_LECTURER, ROLE_ADMIN} from '../../redux/constants/common'; 

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

  // console.log(header);

  return (
    <nav className={classes.header}>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">
              <img src='assets/images/header/Logo.png' alt="logo header" />
            </Link>
          </li>
        </ul>

        {/* Đã/Chưa đăng nhập - Student + Guest */}
        {
          !header.isAuth  || (header.isAuth && +header.role === ROLE_STUDENT)
          ? <SearchNavbar/>
          : <div></div>
        }

        {/* Chưa đăng nhập */}
        { !header.isAuth && <GuestNavbar /> }

        {/*Đã đăng nhập - Student */}
        { header.isAuth && +header.role === ROLE_STUDENT && <StudentNavbar {...header}/> }

        {/*Đã đăng nhập - Lecturer */}
        { header.isAuth && header.role === ROLE_LECTURER && <LecturerNavbar {...header}/> }

        {/*Đã đăng nhập - Admin */}
        { header.isAuth && header.role === ROLE_ADMIN && <AdminNavbar {...header}/> }

      </div>
    </nav>
  );
}

export default MainNavigation;
