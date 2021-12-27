import CardItem from "./CardItem";
import styles from "./styles.module.scss";

const SectionTwo = () => {
  const cardContent = [
    "Trở thành nhà phát triển JavaScript tiên tiến, tự tin và hiện đại ngay từ đầu",
    "Sẵn sàng công việc bằng cách hiểu cách JavaScript thực sự hoạt động đằng sau hậu trường",
    "Cách suy nghĩ và làm việc như một nhà phát triển: giải quyết vấn đề, nghiên cứu, quy trình làm việc",
    "Xây dựng 6 dự án thực tế tuyệt đẹp cho danh mục đầu tư của bạn (không phải là các ứng dụng đồ chơi nhàm chán)",
    "Cách suy nghĩ và làm việc như một nhà phát triển: giải quyết vấn đề, nghiên cứu, quy trình làm việc",
    "Cách suy nghĩ và làm việc như một nhà phát triển: giải quyết vấn đề, nghiên cứu, quy trình làm việc",
  ];
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <span className={`material-icons ${styles["title__icon"]}`}>tungsten</span>
        <span className={styles["text"]}>Những gì bạn sẽ học</span>
      </div>
      <div className={styles["list-content"]}>
        {cardContent.map((item, index) => {
          return <CardItem content={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SectionTwo;
