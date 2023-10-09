import { useContext } from "react";
import styles from "./styles.module.css";
import { StoreScreenMode } from "../App";
import clsx from "clsx";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/logo.svg?react";
import SearchHeader from "./SearchHeader";
import BurgermenuHeader from "./BurgerMenuHeader";

const Header = () => {
  const screenState = useContext(StoreScreenMode);
  return (
    <header className={clsx(styles.header, screenState.dark && styles.dark)}>
      <nav>
        <Link to={"/"} className={styles.homeBtn}>
          <span className={styles.logo}>
            <LogoIcon />
          </span>{" "}
          <span className={styles.logoText}>SoundSpace</span>
        </Link>
        <SearchHeader/>
        <BurgermenuHeader/>
      </nav>
    </header>
  );
};

export default Header;
