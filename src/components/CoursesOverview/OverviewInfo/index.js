import React from "react";
import classes from "./style.module.scss";
import { Link, useHistory } from "react-router-dom";
import currency from "currency.js";
import burstSaleImage from "assets/images/course-detail/foundation_burst-sale.png";
import cursorHandClickImage from "assets/images/course-detail/clarity_cursor-hand-click-line.png"
import Swal from 'sweetalert2';

export default function OverviewInfo(props) {
  const router = useHistory();
  const isAuth = localStorage.getItem("isAuth");
  const handlePopup = () => {
    if(isAuth === "false"){
      Swal.fire({
        icon: 'error',
        html: "<b>Bạn cần phải đăng nhập để tiếp tục</b>",
        showCancelButton: true,
        confirmButtonText: 'Đăng nhập',
        cancelButtonText: 'Hủy',
        confirmButtonColor: "#0D1C45"
      }).then((result)=> {
        if(result.isConfirmed){
          router.push("/login");
        }
      })
    }else{
      Swal.fire({
        html: "<b>Tính năng đang phát triển</b>",
        confirmButtonColor: "#0D1C45"
      });
    }
  }
  const handleClickBuyNow = () => {
    handlePopup();
  }

  const handleAddToCart = () => {
    handlePopup();
  }

  const handleFavoriteBtn = () => {
    handlePopup();
  }

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>
        <div className="col m6 offset-m1" style={{ marginRight: "25px" }}>
          <div className={`row ${classes["category-name-container"]}`}>
            {/* eslint-disable-next-line */}
            <a className={classes.backcouse}>{props.category.name}</a>
            <span className="material-icons">chevron_right</span>
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

          <div className={`row ${classes.watchlist}`}>
            <a className={`waves-light btn ${classes["custom-love-btn"]}`} onClick={handleFavoriteBtn}>
              Yêu thích
              <i className="material-icons center">favorite_border</i>
            </a>
          </div>

          {/* {props.isBestseller && (
            <div>
              <button className={classes["orange-btn"]}>Best Seller</button>
            </div>
          )} */}
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
                    <div className={classes["price-container"]}>
                      <div className={classes["price-discount-container"]}>
                        <span className={classes["price-now"]}>
                          {currency(
                            props.price - props.price * props.discount * 0.01,
                            { separator: ",", symbol: "", precision: 0 }
                          ).format()}{" "}
                          VND
                        </span>
                        <span className={classes["discount"]}>
                          {props.discount}%
                        </span>
                      </div>
                      <img
                        src={burstSaleImage}
                        alt=""
                        className={classes["burst-sale"]}
                      />
                    </div>
                    <span className={classes.oldPrice}>
                      {currency(props.price, {
                        separator: ",",
                        symbol: "",
                        precision: 0,
                      }).format()}{" "}
                      VND
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {currency(props.price, {
                        separator: ",",
                        symbol: "",
                        precision: 0,
                      }).format()}{" "}
                      VND
                    </span>
                  </>
                )}

                {
                  <div className={classes["button-area-container"]}>
                    <div
                      // to="/video-course"
                      className={`waves-light btn ${classes.addToShopBtn}`}
                      onClick={handleAddToCart}
                    >
                      Thêm vào giỏ
                    </div>
                    <div className={classes["buy-now-container"]}>
                      <div
                        // to="/video-course"
                        onClick={handleClickBuyNow}
                        className={`waves-light btn ${classes["buy-now-btn"]}`}
                      >
                        Mua Ngay
                        <img src={cursorHandClickImage} alt="" />
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
