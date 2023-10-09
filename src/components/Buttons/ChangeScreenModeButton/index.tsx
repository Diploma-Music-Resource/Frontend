import { useContext } from "react";
import { MdSunny, MdOutlineWbSunny } from "react-icons/md";
import { StoreScreenMode } from "../../App";
import styles from "./styles.module.css"

const ChangeScreenModeButton = () => {
  const state = useContext(StoreScreenMode);

  return (
    <button onClick={() => state.switchModeScreen()} className={styles.changeMode}>
      {state.dark ? <MdSunny /> : <MdOutlineWbSunny />}
    </button>
  );
};

export default ChangeScreenModeButton;
