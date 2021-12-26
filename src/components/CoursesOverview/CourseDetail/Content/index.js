import React, { useEffect } from "react";
import styles from './style.module.scss';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Chapter from './Chapter';
import Video from './Video';

export default function Content(props) {
  useEffect(function () {
    initCollapsible();
  })

  const initCollapsible = () => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }
  return (
    <div className="row">
      <div className="col m10 offset-m1">
        <div className={styles["title"]}>
          <span class={`material-icons ${styles["title__icon"]}`}>collections_bookmark</span>
          <span className={styles["text"]}>Nội dung khóa học</span>
        </div>
        <ul className="collapsible popout">
          {
            props.chapters &&
            props.chapters.map(chapter =>
              <li key= {chapter.chapter_id} style={{margin: "0"}}>
                <div className="collapsible-header">
                  <Chapter {...chapter}/>
                </div>
                <div className="collapsible-body">
                  {
                    chapter.videos.map(video => <Video key={video.video_id} {...video}/>)
                  }
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
};


