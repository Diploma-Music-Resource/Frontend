import clsx from "clsx";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StoreScreenMode } from "../../components/App";
import { observer } from "mobx-react-lite";

const AuthPage = observer(() => {
  const screenMode = useContext(StoreScreenMode);
  
  return (
    <div className={clsx(styles.authScreen, screenMode.dark && styles.dark)}>
      <div className={clsx(styles.authBlock, screenMode.dark && styles.dark)}>
        <div></div>
      </div>
    </div>
  );
});

export default AuthPage;
