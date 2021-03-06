import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Course from '../../Course';
import classes from './RelatedCourse.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { useHistory } from 'react-router-dom';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const RelatedCourse = ({ title, courses }) => {
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
      <div className={classes.rowBackground}>
      <h3 className={classes.title}>{title}</h3>
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
      </section>
      </div>
    </Fragment>
  );
};

export default RelatedCourse;
