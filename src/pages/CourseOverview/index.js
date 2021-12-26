import React from 'react';
import Layout from '../../layout/Layout';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';
import { useLocation } from 'react-router-dom';
import { courseOverviews } from "../../assets/data/course-detail";
import Courses from '../../components/Courses';
import classes from './style.module.scss'

const CourseOverview = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const courseOverview = courseOverviews[stateLocation.course_id - 1];
  const {chapters, ...overviewData} = courseOverview;

  return (
    <Layout>
      <OverviewInfo {...overviewData}/>
      <CourseDetail {...{ chapters, overviewData, course_id: overviewData.id }}/>
      <div className = {classes.fakeUI}>
        <img src='assets/images/course-certificate.png' alt='Giấy chứng nhận' /> 
        <img src='assets/images/course-professor.png' alt='Thông tin giảng viên' /> 
        <img src='assets/images/course-relate.png' alt='Khóa Học Liên Quan' /> 
      </div>
    </Layout>
  );
};

export default CourseOverview;
