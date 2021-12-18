import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import HotCategories from '../../components/HotCategories';
import { latestCourses, mostViewCourses, hotCourses, hotCategories } from "../../assets/data/home";

const Home = () => {

  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <main className={classes.main}>
          <div>
            <div className={classes.welcome}>
              <p>Tất cả các khóa học đặc sắc nhất</p>
              <p>được cập nhật hàng tuần, hàng tháng</p>
            </div>
            <section>
              <Courses courses={latestCourses} title='Những khóa học mới nhất' />
            </section>
            <section>
              <Courses courses={mostViewCourses} title='Những khóa học được xem nhiều nhất' />
            </section>
            <section>
              <Courses courses={hotCourses} title='Những khóa học nổi bật nhất' />
            </section>
            <section>
              <HotCategories categories={hotCategories} title='Danh mục nổi bật' />
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
