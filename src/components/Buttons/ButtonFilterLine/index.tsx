import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface ButtonFilterLineProps {
  icon: any;
  text: string;
  selected?: boolean;
}

const ButtonFilterLine: React.FC<ButtonFilterLineProps> = ({ icon, text, selected }) => {
  const Icon = icon;
  return (
    <button className={clsx(styles.buttonFilterLine, selected && styles.selected)}>
      <Icon />
      <span>{text}</span>
    </button>
  );
};

export default ButtonFilterLine;
