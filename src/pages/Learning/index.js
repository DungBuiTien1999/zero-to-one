import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Content from '../../components/CoursesOverview/CourseDetail/Content';
import { useLocation } from 'react-router-dom';
import { courseOverviews } from "../../assets/data/course-detail";

const Learning = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const { chapters, ...courseInfo } = courseOverviews[stateLocation.course_id - 1];

  return (
    <div className="row" style={{ padding: 0, margin: 0 }}>
      <div className="row">
        <VideoPlayer {...courseInfo} />
      </div>
      <div className="row">
        <Content {...{ chapters: chapters }} />
      </div>
    </div>
    
  );
};

export default Learning;
