import React from 'react';
import Layout from '../../layout/Layout';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';
import { useLocation } from 'react-router-dom';
// import RelatedCourse from '../../components/CoursesOverview/RelatedCourse';
import { courseOverviews } from "../../assets/data/course-detail";

const CourseOverview = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const courseOverview = courseOverviews[stateLocation.course_id - 1];
  const {chapters, ...overviewData} = courseOverview;

  return (
    <Layout>
      <OverviewInfo {...overviewData}/>
      <CourseDetail {...{chapters, overviewData, course_id: overviewData.id }}/>
      {/* <RelatedCourse {...{
        category_id: overviewData.category_id,
        category_name: overviewData.category_name,
        course_id: overviewData.id
      }}/> */}
    </Layout>
  );
};

export default CourseOverview;
