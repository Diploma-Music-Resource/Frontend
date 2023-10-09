import FilterLine from "../../components/FilterLine";
import Header from "../../components/Header";
import styles from "./styles.module.css";


const HomePage = () => {
    return ( 
        <div className={styles.screen}>
            <Header/>
            <FilterLine/>
        </div>
     );
}
 
export default HomePage;