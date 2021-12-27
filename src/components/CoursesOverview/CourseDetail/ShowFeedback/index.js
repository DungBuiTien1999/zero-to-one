import Rating from "./Rating";
import styles from "./styles.module.scss";

const ShowFeedback = (props) => {
  const {data} = props;
  const {numRating, ratingDetail} = data;
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span>Đánh giá</span>
      </div>
      <div className = "row">
        <div className = "col m4">
          <Rating numRating={numRating} ratingDetail={ratingDetail}/>
        </div>
        <div className = "col m8">
          <img src='assets/images/course-comment.png' alt='Course comment' /> 
        </div>
      </div>
    </div>
  )
}

export default ShowFeedback;