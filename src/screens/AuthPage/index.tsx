import clsx from "clsx";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StoreScreenMode } from "../../components/App";
import { observer } from "mobx-react-lite";
import HeaderAuth from "../../components/auth/HeaderAuth";
import Input from "../../components/Input";

const AuthPage = observer(() => {
  const screenMode = useContext(StoreScreenMode);

  return (
    <div className={clsx(styles.authScreen, screenMode.dark && styles.dark)}>
      <div className={clsx(styles.authBlock, screenMode.dark && styles.dark)}>
        <HeaderAuth text="Sign Up" />
        <div className={styles.signBody}>
          <div className={styles.doubleInput}>
            <Input placeholder="Enter your firstname..." label="Firstname"/>
            <Input placeholder="Enter your lastname..." label="Lastname" />
          </div>
          <Input placeholder="Enter your username..." label="Username"/>
          <Input
            placeholder="Enter your email..."
            label="Email"
            type={"email"}
          />
          <Input
            placeholder="Enter your password..."
            label="Password"
            type="password"
          />
          <Input
            placeholder="Enter your password again..."
            label="Password again"
            type="password"
          />
        </div>
      </div>
    </div>
  );
});

export default AuthPage;
