import FilterLine from "../../components/FilterLine";
import Header from "../../components/Header";
import styles from "./styles.module.css";


const HomePage = () => {
    return ( 
        <div className={styles.screen}>
            <Header/>
            <FilterLine/>
            <div className="w-full h-full"></div>
        </div>
     );
}
 
export default HomePage;