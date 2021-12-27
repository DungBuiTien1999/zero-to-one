import StarRatings from "react-star-ratings";
import NumberFormat from "react-number-format";

import styles from "./styles.module.scss";

const Rating = (props) => {
  const { numRating, ratingDetail } = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["average-rating"]}>
        <span className={styles["number"]}>{numRating}</span>
        <div className={styles["average-rating__right"]}>
          <StarRatings
            rating={numRating}
            starRatedColor="#FCD302"
            name="rating"
            starDimension="15px"
            starSpacing="0"
          />
          <span className={styles["amount"]}>
            <NumberFormat
              value={ratingDetail.amount}
              displayType={"text"}
              thousandSeparator={true}
              thousandsGroupStyle="thousand"
              className={styles["amount"]}
            />{" "}
            đánh giá
          </span>
        </div>
      </div>
      <div className={styles["list-rating-detail"]}>
        {
          ratingDetail.stars.map((item, index) => {
            const percent = Math.round((item/ratingDetail.amount) * 10000) / 100;
            return (
              <div className={styles["rating-item"]}>
                <span className={styles["star"]}>{index + 1} sao</span>
                <div className={styles["bar"]}>
                  <div className={styles["progress-bar"]} style={{width: `${percent}%`}}></div>
                </div>
                <span className={styles["percent"]}>{percent}%</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Rating;
