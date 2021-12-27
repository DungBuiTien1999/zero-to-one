import styles from "./styles.module.scss";

const ProductItem = (props) => {
  const {data} = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["item__name-image"]}>
        <div className={styles["image"]}>
          <img src={data.image} alt=""/>
        </div>
        <div className={styles["name"]}>
          <span>{data.name}</span>
        </div>
      </div>
      <div className={styles["item__description"]}>
        <span>{data.description}</span>
      </div>
    </div>
  )
}

export default ProductItem;