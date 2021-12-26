import React, { useEffect } from "react";
import classes from "./style.module.scss";
import M from "materialize-css/dist/js/materialize.min.js";
import Overview from "./Overview/index";
import Content from "./Content/index";
import Feedback from "./Feedback/index";
import Introduction from "./Introduction";

export default function CourseOverview(props) {
  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById("tabs-swipe-video");
    M.Tabs.init(el, {});
  };

  const commonInfo = [
    {number: "8,290 +", title: "Đăng kí"},
    {number: "≈ 350", title: "Video + Bài tập"},
    {number: "200", title: "Nhận xét"},
    {number: "4.8/5.0", title: "Đánh giá"}
  ]

  return (
    <div className="row">
      <div className={`col m12 ${classes["common-info-container"]}`}>
        <ul>
          {
            commonInfo.map((item, index) => {
              return (
                <li key={index}>
                  <span className={classes["number"]}>{item.number}</span>
                  <span className={classes["title"]}>{item.title}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div id="introduction" className="col m10 offset-m1">
        <div className="section">
          <Introduction />
        </div>
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
