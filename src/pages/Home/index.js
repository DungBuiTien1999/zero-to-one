import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import HotCategories from '../../components/HotCategories';
import RegisteredCourse from '../../components/RegisteredCourse';
import { latestCourses, mostViewCourses, hotCourses, hotCategories } from "../../assets/data/home";

const Home = () => {

  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <main className={classes.main}>
          <div>
            {/* <div className={classes.welcome}>
              <p>Tất cả các khóa học đặc sắc nhất</p>
              <p>được cập nhật hàng tuần, hàng tháng</p>
            </div> */}
            <section>
              <RegisteredCourse title='Khóa học của tôi' />
            </section>
            <section>
              <Courses courses={hotCourses} title='Các khóa học nổi bật' />
            </section>
            <section>
              <Courses courses={latestCourses} title='Các khóa học bán chạy' />
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
