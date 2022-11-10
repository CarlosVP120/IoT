import styles from "./DaysItem.module.css";

const DaysItem = (props) => {
  return (
    <li className={styles.day}>
      <div>
        <h3>{props.id}</h3>
        <div className={styles.hour}>Humedad: {props.humidity}</div>
        <div className={styles.hour}>Light: {props.light}</div>
        <div className={styles.hour}>Temperature: {props.temperature}</div>
        <div className={styles.description}>
          Description: {props.description}
        </div>
        <div className={styles["main-image"]}>
          <img src={props.image} alt="Texto Imagen" />
        </div>
      </div>
    </li>
  );
};

export default DaysItem;
