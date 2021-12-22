import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../layout/Layout';

const VideoCourse = () => {
  const location = useLocation();
  const stateLocation = location.state;
  return (
    <Layout>
      <div className='demo-course-video'>Hello world {stateLocation.course_id}</div>
    </Layout>
  );
};

export default VideoCourse;
