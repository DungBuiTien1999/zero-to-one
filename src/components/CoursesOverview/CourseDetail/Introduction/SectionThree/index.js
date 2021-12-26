import styles from "./styles.module.scss";

const SectionThree = () => {
  const textItems = [
    "Bạn muốn hiểu sâu và thực sự về JavaScript",
    "Bạn đã cố gắng học JavaScript nhưng: 1) vẫn không thực sự hiểu JavaScript, hoặc 2) vẫn không cảm thấy tự tin để viết mã các ứng dụng thực",
    "Bạn quan tâm đến việc sử dụng thư viện / khuôn khổ như React, Angular, Vue hoặc Node.js trong tương lai",
    "Bạn đã biết JavaScript và đang tìm kiếm một khóa học nâng cao. Khóa học này bao gồm các chủ đề chuyên gia!",
    "Bạn muốn bắt đầu với lập trình: JavaScript là một ngôn ngữ đầu tiên tuyệt vời!"
  ]
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span class={`material-icons ${styles["title__icon"]}`}>
          redeem
        </span>
        <span className={styles["text"]}>Khóa học này dành cho ai</span>
      </div>
      <div className={styles["content"]}>
        <ul>
          {
            textItems.map((item,index) => {
              return <li key={index} style={{listStyleType: "disc"}}>{item}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default SectionThree;
