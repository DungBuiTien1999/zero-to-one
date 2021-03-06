import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Course from '../Course';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import classes from './Courses.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { useHistory } from 'react-router-dom';
SwiperCore.use([Pagination, Navigation]);

const Courses = ({ title, courses }) => {
  const history = useHistory();

  const viewDetailCourse = (course_id) => {
    history.push({
      pathname: '/course-overview',
      state: {
        course_id: course_id,
      },
    });
  };

  return (
    <Fragment>
      <div className={classes.rowTitle}>
        <h3 className={classes.title}>{title}</h3>
        
      </div>
      
      <section className={classes.listCourse}>
        <Swiper
            slidesPerView={4}
            spaceBetween={0}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className={classes.mySwiper}
          >
            {courses.map((course) => (
              <SwiperSlide
                key={course.id}
                onClick={() => viewDetailCourse(course.id)}
                className={classes.swiperSlide}
              >
                <Course {...course} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={classes.btnSeeAll}>
            Xem tất cả
            <i className="material-icons">arrow_forward</i>
          </div>
      </section>
    </Fragment>
  );
};

export default Courses;
