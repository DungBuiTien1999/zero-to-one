import Rating from "./Rating";
import styles from "./styles.module.scss";

const ShowFeedback = (props) => {
  const {data} = props;
  const {numRating, ratingDetail} = data;
  return (
    <div>
      <Rating numRating={numRating} ratingDetail={ratingDetail}/>
    </div>
  )
}

export default ShowFeedback;