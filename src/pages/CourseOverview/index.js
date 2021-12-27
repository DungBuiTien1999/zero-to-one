import React from "react";
import Layout from "../../layout/Layout";
import OverviewInfo from "../../components/CoursesOverview/OverviewInfo";
import CourseDetail from "../../components/CoursesOverview/CourseDetail";
import { useLocation } from "react-router-dom";
import RelatedCourse from "../../components/CoursesOverview/RelatedCourse";
import { courseOverviews } from "../../assets/data/course-detail";
import { latestCourses } from "../../assets/data/home";
import usingCertificateImage from "assets/images/course-detail/Addition-Info.png";
import certificateImage from "assets/images/course-detail/Certificate-Paper.png";
import classes from "./style.module.scss";

const CourseOverview = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const courseOverview = courseOverviews[stateLocation.course_id - 1];
  const { chapters, ...overviewData } = courseOverview;

  return (
    <Layout>
      <OverviewInfo {...overviewData} />
      <CourseDetail {...{ chapters, overviewData, course_id: overviewData.id }}>
        <div className={classes["certificate-container"]}>
          <img src={usingCertificateImage} alt="" />
          <img src={certificateImage} alt="" />
        </div>
      </CourseDetail>

      <div className={classes.fakeUI}>
        {/* <img src='assets/images/course-relate.png' alt='Khóa Học Liên Quan' />  */}
      </div>
      <RelatedCourse courses={ latestCourses } title='Khóa Học Liên Quan' />
    </Layout>
  );
};

export default CourseOverview;
