import clsx from "clsx";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StoreScreenMode } from "../../components/App";
import { observer } from "mobx-react-lite";
import HeaderAuth from "../../components/auth/HeaderAuth";
import Input from "../../components/Input";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";
import {AiFillGithub, AiOutlineGoogle} from "react-icons/ai"

const AuthPage = observer(() => {
  const screenMode = useContext(StoreScreenMode);

  return (
    <div className={clsx(styles.authScreen, screenMode.dark && styles.dark)}>
      <div className={clsx(styles.authBlock, screenMode.dark && styles.dark)}>
        <HeaderAuth text="Sign Up" />
        <div className={styles.signBody}>
          <div className={styles.doubleInput}>
            <Input placeholder="Enter your firstname..." label="Firstname" />
            <Input placeholder="Enter your lastname..." label="Lastname" />
          </div>
          <Input placeholder="Enter your username..." label="Username" />
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
        <Button
          onClick={() => {}}
          label="Sign Up"
        />
        <hr />
        <Button
          onClick={() => {}}
          label="Continue whith Google"
          color="grey"
          bordered
          icon={AiOutlineGoogle}
          className="mt-3"
        />
         <Button
          onClick={() => {}}
          label="Continue whith GitHub"
          color="grey"
          bordered
          icon={AiFillGithub}
          className="mt-3"
        />
        <span className={styles.text}>Do you already have an account? <Link to={"/"} className={styles.link}>Sign in here</Link></span>
      </div>
    </div>
  );
});

export default AuthPage;
