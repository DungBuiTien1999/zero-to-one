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
  const [currentChapter, setCurrentChapter] = useState();
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
          setCurrentChapter(chapter);
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

  const onClickSubVideo = (vid, chap) => {
    const indexChap = chapters.findIndex(
      (chapter) => chapter === currentChapter
    );
    const indexVid = currentChapter.videos.findIndex(
      (video) => video === currentVideo
    );

    const indexNextChap = chapters.findIndex((chapter) => chapter === chap);
    const indexNextVid = chap.videos.findIndex((video) => video === vid);
    const currentVideoClone = {
      ...chapters[indexChap].videos[indexVid],
              isCurrent: false,
    }
    const currentVideosClone = [
      ...chapters[indexChap].videos.slice(0, indexVid),
        currentVideoClone,
      ...chapters[indexChap].videos.slice(indexVid + 1),
    ]
    const currentChapterClone = {
      ...chapters[indexChap],
          isCurrent: false,
          videos: currentVideosClone,
    }
    const nextVideoClone = {
      ...chapters[indexNextChap].videos[indexNextVid],
      isCurrent: true,
    }
    const nextVideosClone = [
      ...chapters[indexNextChap].videos.slice(0, indexNextVid),
        nextVideoClone,
      ...chapters[indexNextChap].videos.slice(indexNextVid + 1),
    ]
    const nextChapterClone = {
      ...chapters[indexNextChap],
      isCurrent: true,
      videos: nextVideosClone,
    };

    if (indexChap > indexNextChap) {
      setChapters([
        ...chapters.slice(0, indexNextChap),
        nextChapterClone,
        ...chapters.slice(indexNextChap + 1, indexChap),
        currentChapterClone,
        ...chapters.slice(indexChap + 1),
      ]);
      setCurrentChapter(nextChapterClone);
    } else if (indexChap < indexNextChap) {
      setChapters([
        ...chapters.slice(0, indexChap),
        currentChapterClone,
        ...chapters.slice(indexChap + 1, indexNextChap),
        nextChapterClone,
        ...chapters.slice(indexNextChap + 1),
      ]);
      setCurrentChapter(nextChapterClone);
    } else {
      let currentVideos;
      if (indexVid === indexNextVid) {
        return;
      } else if (indexVid > indexNextVid) {
        currentVideos = [
          ...chapters[indexChap].videos.slice(0, indexNextVid),
          nextVideoClone,
          ...chapters[indexChap].videos.slice(indexNextVid + 1, indexVid),
          currentVideoClone,
          ...chapters[indexChap].videos.slice(indexVid + 1),
        ]
        
      } else {
        currentVideos = [
          ...chapters[indexChap].videos.slice(0, indexVid),
          currentVideoClone,
          ...chapters[indexChap].videos.slice(indexVid + 1, indexNextVid),
          nextVideoClone,
          ...chapters[indexChap].videos.slice(indexNextVid + 1),
        ]
      }
      const nextChapter = {
        ...chapters[indexChap],
        videos: currentVideos,
      }
      setChapters([
        ...chapters.slice(0, indexChap),
        nextChapter,
        ...chapters.slice(indexChap + 1),
      ]);
      setCurrentChapter(nextChapter);
    }
    
    setCurrentVideo(nextVideoClone);
    window.scrollTo({top: 0, behavior: 'smooth'});
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
  };

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
                frameBorder="0"
                allowFullScreen
                ng-show="showvideo"
              ></iframe>
              <h3 className="v-s-title">{currentVideo.title}</h3>
              <h3 className="v-s1-title">Description</h3>
              <div
                className={`v-description ${showFullDes ? '' : 'v-hide-text'}`}
              >
                {htmlToReactParser.parse(currentVideo.description)}
              </div>
              <p className="v-show-desc" onClick={onClickShowDescription}>
                {showFullDes ? 'Show Less' : 'Show More'}
              </p>
              <img
                src="assets/images/course/comment-image.png"
                alt="comments"
                className="v-comments"
              />
            </div>
          </section>
        )}
        {chapters && (
          <div className="v-right">
            <div className="list-chapter">
              {chapters.map((chapter) => (
                <div key={chapter.id} className="chapter-item">
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
                        key={video.id}
                          className="chapter-body"
                          onClick={() => onClickSubVideo(video, chapter)}
                        >
                          {video.progress === 100 ? (
                            <img className="circle-o" src="assets/images/course/Vector1.png"></img>
                          ) : (
                            <img className="circle-o" src="assets/images/course/Vector.png"></img>
                          )}

                          <img
                            className="video"
                            src={video.thumbail}
                            alt={video.title}
                          />
                          <p
                            className={`video-title ${
                              video.isCurrent ? 'current-video' : ''
                            }`}
                          >
                            {video.title}
                          </p>
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
