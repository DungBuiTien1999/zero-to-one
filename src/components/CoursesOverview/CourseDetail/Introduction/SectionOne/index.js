import styles from "./styles.module.scss";

const SectionOne = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span className={`material-icons ${styles["title__icon"]}`}>description</span>
        <span className={styles["text"]}>Giới thiệu khóa học</span>
      </div>
      <div className={styles["content"]}>
        <span>Đây là khóa học JavaScript đầy đủ nhất trên <b>ZeroOne</b>. Đó là một gói tất cả trong một sẽ đưa bạn từ những nguyên tắc cơ bản của JavaScript, tất cả các cách để xây dựng các ứng dụng hiện đại và phức tạp.</span>
        <span>Bạn sẽ học JavaScript hiện đại ngay từ đầu, từng bước một. Tôi sẽ hướng dẫn bạn thông qua các ví dụ mã thực tế và thú vị, lý thuyết quan trọng về cách JavaScript hoạt động đằng sau hậu trường, và các dự án đẹp và hoàn chỉnh.</span>
      </div>
    </div>
  );
};

export default SectionOne;
