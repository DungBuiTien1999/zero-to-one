import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

const RegisteredCourse = ({ courses, title }) => {
  return (
    <Fragment>
      <h3 className={classes.title}>{title}</h3>
      <section className={classes.courseList}>
        {courses.map((course) => (
          <div
            // onClick={() => getcourseByCategory(category.id, category.category_name)}
            key={course.id}
          >
            <Link
              to={{
                pathname: '/video-course',
                state: {
                  course_id: course.id,
                },
              }}
            >
              <div className={classes.courseCard}>
                <img src={course.img_source} alt="Course" />
                <div className={classes.content}>
                  <h6 className={classes.name}>{course.title}</h6>
                  <p className={classes.lettor}>{course.lecturer}</p>
                  <p className={classes.progress}>{`${course.progress}%`}</p>
                  <ProgressBar progress={course.progress} height={10} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

const ProgressBar = ({ progress, height }) => {
  const Parentdiv = {
    height: height,
    width: '97%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 5,
    border: '1px solid #363636',
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#FCD500',
    borderRadius: 5,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'white',
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}></span>
      </div>
    </div>
  );
};

export default RegisteredCourse;
