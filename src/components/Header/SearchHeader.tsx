import clsx from "clsx";
import styles from "./styles.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useContext } from "react";
import { StoreScreenMode } from "../App";

const SearchHeader = () => {
  const screenState = useContext(StoreScreenMode);

  return (
    <div className={clsx(styles.searchBlock, screenState.dark && styles.dark)}>
      <button className={styles.searchBtn}>
        <BiSearchAlt />
      </button>
      <div className={styles.searchBody}>
        <div className={styles.selectTypeSearch}>
          <button>By track</button>
          <hr />
          <button>By album</button>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
