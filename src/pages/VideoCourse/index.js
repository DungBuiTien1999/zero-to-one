import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HtmlToReact from 'html-to-react';
import Layout from '../../layout/Layout';
import { myCourses } from '../../assets/data/home';
import 'font-awesome/css/font-awesome.min.css';
const VideoCourse = () => {
  const location = useLocation();
  const stateLocation = location.state;

  const [courseTitle, setCourseTitle] = useState();
  const [chapters, setChapters] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [showFullDes, setShowFullDes] = useState(false);
  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();

  useEffect(() => {
    setCourseTitle(myCourses[stateLocation.course_id - 1].title);
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

  const onClickShowChapter = (chapter) => {
    const index = chapters.findIndex((chap) => chap === chapter);
    setChapters([
      ...chapters.slice(0, index),
      {
        ...chapters[index],
        isShow: !chapters[index].isShow,
      },
      ...chapters.slice(index + 1),
    ]);
  };

  const onClickShowDescription = () => {
    setShowFullDes(!showFullDes);
  }

  return (
    <Layout>
      {courseTitle && <h1 className="v-title">{courseTitle}</h1>}
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
              <h3 className="v-s-title">{currentVideo.title}</h3>
              <h3 className="v-s1-title">Description</h3>
              <div className={`v-description ${showFullDes ? "" : "v-hide-text"}`}>
                {htmlToReactParser.parse(currentVideo.description)}
              </div>
              <p className='v-show-desc' onClick={onClickShowDescription}>{showFullDes ? "Show Less" : "Show More"}</p>
              <img src="assets/images/course/comment-image.png" alt="comments" className='v-comments' />
            </div>
          </section>
        )}
        {chapters && (
          <div className="v-right">
            <div className="list-chapter">
              {chapters.map((chapter) => (
                <div className="chapter-item">
                  <p
                    className="chapter-title"
                    onClick={() => onClickShowChapter(chapter)}
                  >
                    {chapter.isShow ? (
                      <i className="fa fa-angle-up"></i>
                    ) : (
                      <i className="fa fa-angle-down"></i>
                    )}
                    {chapter.title}
                  </p>
                  <div className="chapter-videos">
                    <ul className={chapter.isShow ? '' : 'v-hiden'}>
                      {chapter.videos.map((video) => (
                        <li
                          className="chapter-body"
                          onClick={() => onClickSubVideo(video)}
                        >
                          {video.progress === 100 ? (
                            <i className="fa fa-check-circle"></i>
                          ) : (
                            <i className="fa fa-circle"></i>
                          )}

                          <img
                            className="video"
                            src={video.thumbail}
                            alt={video.title}
                          />
                          <p className={`video-title ${video.isCurrent ? "current-video" : ""}`}>{video.title}</p>
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
