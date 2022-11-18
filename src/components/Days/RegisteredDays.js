import DaysItem from "./DaysItem";

import styles from "./RegisteredDays.module.css";

import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const RegisteredDays = (props) => {

  const [dataArray, setDataArray] = useState([]);

  // Read data from the database
  useEffect(() => {
    onValue(ref(db, "CollectedData"), (snapshot) => {
      setDataArray([]);
      const data = snapshot.val();
      if (data) {
        // add data to the array
        for (let id in data) {
          setDataArray((dataArray) => [...dataArray, { id, ...data[id] }]);
        }
      }
    });
  }, []);

  const dataList = dataArray.map((data) => (
    <DaysItem 
      admin={props.admin}
      id={data.id}
      day={data.date}
      humidity={data.humidity}
      light={data.light}
      temperature={data.temperature}
      description={data.description}
      // image={day.img}
    />
  ));

  return (
    <div className={styles.regDays}>
      <section className={styles.days}>
        <ul>{dataList}</ul>
      </section>
    </div>
  );
};

export default RegisteredDays;
