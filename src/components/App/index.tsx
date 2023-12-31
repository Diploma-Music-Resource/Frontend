import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.css";
import clsx from "clsx";
import { createContext, useContext } from "react";
import ScreenModeStore from "../../store/screenMode";
import { observer } from "mobx-react-lite";
import HomePage from "../../screens/HomePage";

export const StoreScreenMode = createContext(new ScreenModeStore());

const App = observer(() => {
  const screenMode = useContext(StoreScreenMode);

  return (
    <div className={clsx(styles.screen, screenMode.dark && styles.dark)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
});

export default App;
