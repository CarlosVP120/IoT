import React from 'react'
import { db } from "../firebase";
import { set, ref } from "firebase/database";
import { useState } from "react";

import styles from "./AddData.module.css";
import Swal from 'sweetalert2';

function AddData() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [light, setLight] = useState("");
  const [description, setDescription] = useState("");

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

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Added Correctly',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div className={styles.InputPage}>
      <input
      type="text"
      id={styles.input}
      value={temperature}
      onChange={handleTemperatureChange}
      placeholder="Temperature"
    />
    
    
    <input
      type="text"
      id={styles.input}
      value={humidity}
      onChange={handleHumidityChange}
      placeholder="Humidity"
    />
    
    
    <input
      type="text"
      id={styles.input}
      value={light}
      onChange={handleLightChange}
      placeholder="Light"
    />
    
    
    <input
      type="text"
      id={styles.input}
      value={description}
      onChange={handleDescriptionChange}
      placeholder="Description"
    />
    
    
    <button onClick={WriteToDatabase}>Submit</button>
  </div>
  )
}

export default AddData