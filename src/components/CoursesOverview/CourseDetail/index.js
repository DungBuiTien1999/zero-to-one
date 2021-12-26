import React, { useEffect } from "react";
import classes from "./style.module.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import Overview from "./Overview/index";
import Content from "./Content/index";
import Feedback from "./Feedback/index";

export default function CourseOverview(props) {
  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById("tabs-swipe-video");
    M.Tabs.init(el, {});
  };

  return (
    <div className="row">
      <div className={`col m12 ${classes["common-info-container"]}`}>
        <ul>
          <li>
            <span className={classes["number"]}>8,290 +</span>
            <span className={classes["title "]}>Đăng kí</span>
          </li>
          <li>
            <span className={classes["number"]}>350</span>
            <span className={classes["title "]}>Video + Bài tập</span>
          </li>
          <li>
            <span className={classes["number"]}>200</span>
            <span className={classes["title"]}>Nhận xét</span>
          </li>
          <li>
            <span className={classes["number"]}>4.8/5.0</span>
            <span className={classes["title"]}>Đánh giá</span>
          </li>
        </ul>
      </div>
      <div id="overview" className="col m12">
        <div className="section">
          <Overview {...props.overviewData} />
        </div>
      </div>
      <div id="content" className="col m12">
        <div className="section">
          <Content {...{ chapters: props.chapters }} />
        </div>
      </div>
      <div id="feedback" className="col m12">
        <div className="section">
          <Feedback
            {...{
              course_id: props.course_id,
              isFeedbacked: props.overviewData.isFeedbacked,
              isRegister: props.overviewData.isRegister,
            }}
          />
        </div>
      </div>
    </div>
  );
}
