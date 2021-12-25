import React, { useEffect } from "react";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";
import currency from "currency.js";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../../redux/constants/actionTypes";

export default function OverviewInfo(props) {
  const dispatch = useDispatch();
  const favoriteCourse = useSelector((state) => state.favoriteCourse.data);
  const registerCourse = useSelector((state) => state.registerCourse.data);

  useEffect(
    function () {
      dispatch({
        type: actionType.FETCH_FAVORITE_COURSE,
        payload: {
          course_id: props.id,
          isFavorite: props.isFavorite,
        },
      });

      dispatch({
        type: actionType.FETCH_IS_REGISTER_COURSE,
        payload: {
          course_id: props.id,
          isRegister: props.isRegister,
        },
      });
    },
    [dispatch, props.isFavorite, props.isRegister, props.id]
  );

  const updateListFavorite = () => {
    dispatch({
      type: actionType.UPDATE_FAVORITE_COURSE,
      payload: {
        course_id: props.id,
        isFavorite: !favoriteCourse.isFavorite,
      },
    });
  };

  const RegisterLearning = (course_id) => {
    dispatch({
      type: actionType.FETCH_REGISTER_COURSE,
      payload: {
        course_id,
      },
    });
  };

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>
        <div className="col m6 offset-m1" style={{ marginRight: "25px" }}>
          <div className="row">
            {/* eslint-disable-next-line */}
            <a className={classes.backcouse}>
              <i className="material-icons left">arrow_back</i>
              {props.category.name}
            </a>
          </div>
          <div className="row">
            <span className={`${classes["course__name"]}`}>{props.title}</span>
          </div>
          <div className="row">
            <p className={classes["course__short-description"]}>
              {props.short_description}
            </p>
          </div>

          <div className={`row ${classes.release}`} style={{ display: "flex" }}>
            <i className="material-icons">new_releases</i>
            <span>&ensp;Cập nhật lần cuối vào lúc {props.last_update}</span>
          </div>

          <div className={`row`}>
            <button className={classes["orange-btn"]}>Best Seller</button>
          </div>
        </div>

        <div className="col m4">
          <div className="row">
            <div className={`card ${classes.card}`}>
              <div className={`card-image ${classes.playImage}`}>
                <img
                  src={props.course_img_source}
                  alt={props.course_img_title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "assets/images/default.jpeg";
                  }}
                />
                {/* eslint-disable-next-line */}
                <a href="#">
                  <i className="material-icons">play_circle_filled</i>
                </a>
              </div>

              <div className={`card-content ${classes.price}`}>
                {props.discount > 0 ? (
                  <>
                    <h5>
                      {currency(
                        props.price - props.price * props.discount * 0.01,
                        { separator: ",", symbol: "", precision: 0 }
                      ).format()}{" "}
                      VND
                    </h5>
                    <h5 className={classes.oldPrice}>
                      {currency(props.price, {
                        separator: ",",
                        symbol: "",
                        precision: 0,
                      }).format()}{" "}
                      VND
                    </h5>
                  </>
                ) : (
                  <>
                    <h5>
                      {currency(props.price, {
                        separator: ",",
                        symbol: "",
                        precision: 0,
                      }).format()}{" "}
                      VND
                    </h5>
                  </>
                )}

                {
                  <>
                    <div className={classes["add-love-container"]}>
                      <Link
                        to="/video-course"
                        className={`waves-light btn ${classes.addToShopBtn}`}
                      >
                        Thêm vào giỏ
                      </Link>
                      <div className={classes.watchlist}>
                        <a className={`waves-light btn ${classes["custom-love-btn"]}`} onClick={updateListFavorite}>
                          <i className="material-icons center">favorite_border</i>
                        </a>
                      </div>
                    </div>
                    <div className={classes["buy-now-container"]}>
                      <Link
                          to="/video-course"
                          className={`waves-light btn ${classes["buy-now-btn"]}`}
                        >
                          Mua Ngay
                      </Link>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
