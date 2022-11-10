import React, { Fragment } from 'react'
import { db } from '../../firebase'
import { set,ref, onValue } from 'firebase/database';
import { useState,useEffect } from 'react';

function DataBase() {
  const [temperature,setTemperature] = useState("");
  const [humidity,setHumidity] = useState("");
  const [light,setLight] = useState("");

  const [dataArray,setDataArray] = useState([]);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value)
  }
  const handleHumidityChange = (e) => {
    setHumidity(e.target.value)
  }
  const handleLightChange = (e) => {
    setLight(e.target.value)
  }

  // Read data from the database
  useEffect(() => {
    onValue(ref(db, "CollectedData"),(snapshot) => {
      setDataArray([]);
      const data = snapshot.val();
      if(data){
        // add data to the array
        for(let id in data){
          setDataArray((dataArray) => [...dataArray, {id, ...data[id]}])
        }
      }
    })
  },[]);

  // Write to the database
  const WriteToDatabase = () => {
    let date = new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })
    set(ref(db, `/CollectedData/${date}`), {
      temperature,
      humidity,
      light,
    });

    setTemperature("")
    setHumidity("")
    setLight("")
  }

  // // Delete from the database
  // const handleDelete = (temperature) => {
  //   set(ref(db, `/CollectedData/${temperature.uuid}`), null);
  // }

  return (
    <div className="Inputs">
      <input type="text" id="input" value={temperature} onChange={handleTemperatureChange} placeholder="Temperature"/><br/><br/>
      <input type="text" id="input" value={humidity} onChange={handleHumidityChange}  placeholder="Humidity"/><br/><br/>
      <input type="text" id="input" value={light} onChange={handleLightChange}  placeholder="Light"/><br/><br/>
      <button onClick={WriteToDatabase}>Submit</button>
      {dataArray.map((data) => (
        <Fragment>
          <h1>{data.id}</h1>
          <p>Temperature: {data.temperature}</p>
          <p>Humidity: {data.humidity}</p>
          <p>Light: {data.light}</p>
        <Fragment/>
      ))}
    </div>
  )
}

export default DataBase