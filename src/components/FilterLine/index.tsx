import clsx from "clsx";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StoreScreenMode } from "../App";
import ButtonFilterLine from "../Buttons/ButtonFilterLine";
import { GiBalaclava, GiGrandPiano, GiSaxophone, GiSoundWaves, GiWolfTrap } from "react-icons/gi";
import { TbHandRock, TbMichelinBibGourmand } from "react-icons/tb";
import { BsSpeaker } from "react-icons/bs";
import { LiaGuitarSolid } from "react-icons/lia";
import { FaHatCowboy } from "react-icons/fa";
import { TfiMicrophoneAlt } from "react-icons/tfi";

const FilterLine = () => {
  const screenState = useContext(StoreScreenMode);
  return (
    <div className={clsx(styles.filterLine, screenState.dark && styles.dark)}>
      <div className={styles.filterLineFlex}>
        <ButtonFilterLine icon={GiBalaclava} text="Drill" />
        <ButtonFilterLine icon={TbMichelinBibGourmand} text="Phonk" />
        <ButtonFilterLine icon={TfiMicrophoneAlt} text="Hip-hop" />
        <ButtonFilterLine icon={GiSaxophone} text="Jazz" />
        <ButtonFilterLine icon={FaHatCowboy} text="Country" />
        <ButtonFilterLine icon={TbHandRock} text="Rock" />
        <ButtonFilterLine icon={GiGrandPiano} text="Classical" />
        <ButtonFilterLine icon={LiaGuitarSolid} text="Chanson" />
        <ButtonFilterLine icon={GiSoundWaves} text="EDM" />
        <ButtonFilterLine icon={GiWolfTrap} text="Trap" />
        <ButtonFilterLine icon={BsSpeaker} text="Club" />
      </div>
    </div>
  );
};

export default FilterLine;
