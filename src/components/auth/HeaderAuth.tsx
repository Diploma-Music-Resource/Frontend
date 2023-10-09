import { BiLogInCircle } from "react-icons/bi";
import styles from "./styles.module.css";
import React, { useContext } from "react";
import { StoreScreenMode } from "../App";
import clsx from "clsx";
import ChangeScreenModeButton from "../Buttons/ChangeScreenModeButton";

interface HeaderAuthProps {
  text: string
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({text}) => {
  const state = useContext(StoreScreenMode)
  return (
    <div className={clsx(styles.header, state.dark && styles.dark)}>
      <span>
        <BiLogInCircle className={styles.icon} />
      </span>
      <h3>{text}</h3>
      <ChangeScreenModeButton/>
    </div>
  );
};

export default HeaderAuth;
