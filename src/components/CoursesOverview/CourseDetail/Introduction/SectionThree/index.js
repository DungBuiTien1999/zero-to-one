import styles from "./styles.module.scss";

const SectionThree = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span class={`material-icons ${styles["title__icon"]}`}>
          redeem
        </span>
        <span className={styles["text"]}>Khóa học này dành cho ai</span>
      </div>
    </div>
  );
};

export default SectionThree;
