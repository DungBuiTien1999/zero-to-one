import ProductItem from "./ProductItem";
import styles from "./styles.module.scss";

const DemoProducts = (props) => {
  const {products} = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["title-container"]}>
        <span className={styles["title"]}>Sản phẩm Demo</span>
      </div>
      <div className={styles["products-container"]}>
        {
          products.map((item) => {
            return <ProductItem data={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}

export default DemoProducts;