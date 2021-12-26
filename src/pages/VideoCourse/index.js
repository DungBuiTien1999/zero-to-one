import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HtmlToReact from 'html-to-react';
import Layout from '../../layout/Layout';
import { myCourses } from '../../assets/data/home';
const VideoCourse = () => {
  const location = useLocation();
  const stateLocation = location.state;

  const [chapters, setChapters] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();

  useEffect(() => {
    setChapters(myCourses[stateLocation.course_id - 1].chapters);
    if (myCourses[stateLocation.course_id - 1].chapters) {
      for (const chapter of myCourses[stateLocation.course_id - 1].chapters) {
        if (chapter.isCurrent) {
          for (const video of chapter.videos) {
            if (video.isCurrent) {
              setCurrentVideo(video);
              break;
            }
          }
        }
      }
    }
  }, [stateLocation]);

  const onClickSubVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <Layout>
      <div className="v-container">
        {currentVideo && (
          <section className="v-left">
            <div>
              <iframe
                title={currentVideo.title}
                className="video-course"
                src={currentVideo.linkVideo}
                frameborder="0"
                allowFullScreen
                ng-show="showvideo"
              ></iframe>
              <h3>{currentVideo.title}</h3>
              <h3>Description</h3>
              <div>{htmlToReactParser.parse(currentVideo.description)}</div>
            </div>
          </section>
        )}
        {chapters && (
          <div className="v-right">
            <div className="list-chapter">
              {chapters.map((chapter) => (
                <div className="chapter-item">
                  <p className="chapter-title">{chapter.title}</p>
                  <div className="chapter-videos">
                    <ul>
                      {chapter.videos.map((video) => (
                        <li onClick={() => onClickSubVideo(video)}>
                          <img src={video.thumbail} alt={video.title} />
                          <p>{video.title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VideoCourse;
