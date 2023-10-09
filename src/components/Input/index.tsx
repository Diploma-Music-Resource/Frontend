import React, { HTMLInputTypeAttribute, useContext, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import styles from "./styles.module.css";
import { StoreScreenMode } from "../App";
import clsx from "clsx";

interface InputProps {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  noLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  type = "text",
  noLabel = false,
}) => {
  const screenState = useContext(StoreScreenMode);
  const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>(type);
  
  const switchType = () => {
    if (typeInput === "password") return setTypeInput("text");
    setTypeInput(type);
  };

  return (
    <div className={clsx(styles.inputBlock, screenState.dark && styles.dark)}>
      {!noLabel && <span>{label}</span>}
      <div className={clsx(styles.input, type === "password" && styles.double)}>
        <input type={typeInput} placeholder={placeholder} />
        {type === "password" && (
          <button onClick={switchType}>
            {typeInput === "password" ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
