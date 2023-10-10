import React from "react";
import styles from "./styles.module.css";

interface ButtonFilterLineProps {
  icon: any;
  text: string;
}

const ButtonFilterLine: React.FC<ButtonFilterLineProps> = ({ icon, text }) => {
  const Icon = icon;
  return (
    <button className={styles.buttonFilterLine}>
      <Icon />
      <span>{text}</span>
    </button>
  );
};

export default ButtonFilterLine;
