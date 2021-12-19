import React, { useState } from "react";
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import HotCategories from '../../components/HotCategories';
import RegisteredCourse from '../../components/RegisteredCourse';
import { latestCourses, mostViewCourses, hotCourses, hotCategories, myCourses } from "../../assets/data/home";
import { useEffect } from 'react';

const Home = () => {
  const [header, setHeader] = useState({
    isAuth: false,
  })

  useEffect(function(){
    const isauth = localStorage.getItem("isAuth") === "true";
    setHeader({ isAuth: isauth});
  },[])

  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <main className={classes.main}>
          <div>
            <section>
              {/*Đã đăng nhập - Student */}
              { header.isAuth && (<RegisteredCourse courses={myCourses} title='Khóa học của tôi' ></RegisteredCourse>) }
            </section>
            <section>
              <Courses courses={hotCourses} title='Những khóa học nổi bật' />
            </section>
            <section>
              <Courses courses={latestCourses} title='Những khóa học bán chạy' />
            </section>
            <section>
              <Courses courses={mostViewCourses} title='Những khóa học mới' />
            </section>
            <section>
              <HotCategories categories={hotCategories} title='Danh mục nổi bật' />
            </section>
            
          </div>
        </main>
        <img src='assets/images/home/Bảng xếp hạng và thông tin ứng tuyển.png' alt='Bảng xếp hạng và thông tin tuyển dụng.' /> 
        <img src='assets/images/home/TinTuc.png' alt='Sự kiện trong tháng.' /> 
      </div>
    </Layout>
  );
};

export default Home;
