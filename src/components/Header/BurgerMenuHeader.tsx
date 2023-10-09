import styles from "./styles.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {CiUser} from "react-icons/ci"

const BurgermenuHeader = () => {

  return (
    <div className={styles.burgermenuBtn}>
      <div>
        <GiHamburgerMenu />
      </div>
      <div>
        <CiUser/>
      </div>
    </div>
  );
};

export default BurgermenuHeader;
