import styles from "./styles.module.css";
import React, { useContext } from "react";
import classNames from "classnames";
import { StoreScreenMode } from "../App";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  icon?: any | null;
  color?: "blue" | "red" | "grey";
  disabled?: boolean;
  onlyIcon?: boolean;
  noLabel?: boolean;
  bordered?: boolean;
  rightIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon = null,
  onClick,
  className,
  color = "blue",
  disabled,
  onlyIcon,
  bordered,
  noLabel,
  rightIcon,
}) => {
  const screenMode = useContext(StoreScreenMode);
  const Icon = icon;

  return (
    <button
      className={classNames({
        [styles.button]: true,
        [styles.dark]: screenMode.dark,
        [styles.redButton]: color === "red",
        [styles.blueButton]: color === "blue",
        [styles.greyButton]: color === "grey",
        [styles.bordered]: bordered,
        [styles.disabled]: disabled,
        [styles.rightIcon]: rightIcon,
        [styles.onlyIcon]: onlyIcon,
        [className || ""]: !!className,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}
      {!noLabel && !onlyIcon && <span>{label}</span>}
    </button>
  );
};

export default Button;
