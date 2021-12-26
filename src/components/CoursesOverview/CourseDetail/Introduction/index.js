import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

import styles from "./styles.module.scss";


const Introduction = (props) => {
  return (
    <div className={styles["container"]}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}

export default Introduction;