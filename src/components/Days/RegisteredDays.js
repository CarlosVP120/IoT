import plantImage from "../../assets/imagenEjemplo.jpg";

import DaysItem from "./DaysItem";

import styles from "./RegisteredDays.module.css";
import Input from "../UI/Input";

import { db } from "../../firebase";
import { set, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

const DUMMY_DAYS = [
  {
    id: "d1",
    day: "Day 1",
    hour: "13:45:32",
    date: "05 / 11 / 2022",
    description: "This day",
    img: plantImage,
  },
  {
    id: "d2",
    day: "Day 2",
    hour: "13:45:32",
    date: "05 / 11 / 2022",
    description: "This day...",
    img: plantImage,
  },
  {
    id: "d2",
    day: "Day 2",
    hour: "13:45:32",
    date: "05 / 11 / 2022",
    description: "This day...",
    img: plantImage,
  },
];

const RegisteredDays = () => {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [light, setLight] = useState("");
  const [description, setDescription] = useState("");

  const [dataArray, setDataArray] = useState([]);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };
  const handleHumidityChange = (e) => {
    setHumidity(e.target.value);
  };
  const handleLightChange = (e) => {
    setLight(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

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

  // Write to the database
  const WriteToDatabase = () => {
    let date = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });
    set(ref(db, `/CollectedData/${date}`), {
      temperature,
      humidity,
      light,
      description,
    });

    setTemperature("");
    setHumidity("");
    setLight("");
    setDescription("");
  };

  const dataList = dataArray.map((data) => (
    <DaysItem
      id={data.id}
      day={data.id}
      humidity={data.humidity}
      light={data.light}
      temperature={data.temperature}
      description={data.description}
      // image={day.img}
    />
  ));

  const INPUTS = [
    { value: "Temperature" },
    { value: "Humidity" },
    { value: "Light" },
  ];

  const inputList = INPUTS.map((inp) => <Input name={inp.value} />);

  return (
    <div>
      {" "}
      <input
        type="text"
        id="input"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Temperature"
      />
      <br />
      <br />
      <input
        type="text"
        id="input"
        value={humidity}
        onChange={handleHumidityChange}
        placeholder="Humidity"
      />
      <br />
      <br />
      <input
        type="text"
        id="input"
        value={light}
        onChange={handleLightChange}
        placeholder="Light"
      />
      <br />
      <br />
      <input
        type="text"
        id="input"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
      <br />
      <br />
      <button onClick={WriteToDatabase}>Submit</button>
      <section className={styles.days}>
        <ul>{dataList}</ul>
      </section>
    </div>
  );
};

export default RegisteredDays;
