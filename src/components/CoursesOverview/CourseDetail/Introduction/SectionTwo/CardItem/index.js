import styles from "./styles.module.scss";
import tickIconImage from "assets/images/course-detail/teenyicons_tick-solid.png";

const CardItem = (props) => {
  return (
    <div className={styles["container"]}>
      <img src={tickIconImage} alt="" className={styles["tick-icon"]}/>
      <span>{props.content}</span>
    </div>
  )
}

export default CardItem;