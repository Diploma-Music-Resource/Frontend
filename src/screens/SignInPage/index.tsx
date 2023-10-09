import clsx from "clsx";
import styles from "./styles.module.css";
import { StoreScreenMode } from "../../components/App";
import { useContext } from "react";
import HeaderAuth from "../../components/auth/HeaderAuth";
import Input from "../../components/Input";
import Button from "../../components/Buttons";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const screenMode = useContext(StoreScreenMode);

  return (
    <div className={clsx(styles.authScreen, screenMode.dark && styles.dark)}>
      <div className={clsx(styles.authBlock, screenMode.dark && styles.dark)}>
        <HeaderAuth text="Sign In" />
        <div className={styles.signBody}>
          <Input
            placeholder="Enter your username or email..."
            label="Username or email"
          />
          <Input
            placeholder="Enter your password..."
            label="Password"
            type="password"
          />
        </div>
        <Button onClick={() => {}} label="Sign In" />
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
        <span className={styles.text}>Don't have an account? <Link to={"/"} className={styles.link}>Sign up here</Link></span>
      </div>
    </div>
  );
};

export default SignInPage;
