import styles from "./DaysItem.module.css";
import {db} from '../../firebase';
import { remove, ref } from "firebase/database";

const DaysItem = (props) => {

  const handleClearValue = () => {
    remove(ref(db, `/CollectedData/${props.id}`));
  };

  return (
    <li className={styles.day}>
      <div>
        <h3>{props.id}</h3>
        <div className={styles.hour}>Temperature: {props.temperature}</div>
        <div className={styles.hour}>Humidity: {props.humidity}</div>
        <div className={styles.hour}>Light: {props.light}</div>
        <div className={styles.description}>
          Description: {props.description}
        </div>
        {
          props.admin ? 
          <>
            <button onClick={handleClearValue} className={styles.delete}>Delete</button> 
          </>
          : null
        }
        {/* <div className={styles["main-image"]}>
          <img src={props.image} alt="Texto Imagen" />
        </div> */}
      </div>
    </li>
  );
};

export default DaysItem;
