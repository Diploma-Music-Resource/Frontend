import clsx from "clsx";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StoreScreenMode } from "../App";

const FilterLine = () => {
    const screenState = useContext(StoreScreenMode)
    return ( <div className={clsx(styles.filterLine, screenState.dark && styles.dark)}>

    </div> );
}
 
export default FilterLine;