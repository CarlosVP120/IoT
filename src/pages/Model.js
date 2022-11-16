import React from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./041-nanoplanet"
import { OrbitControls } from "@react-three/drei";

import styles from "./Model.module.css";

export default function Model() {

  return (
    <div className={styles.Canvascontainer}>
      <div className={styles.canvas}>
        <Canvas>
          <OrbitControls enableZoom={false} enableRotate={false}/>
          <directionalLight intensity={1} />
          <ambientLight intensity={0.5} />
          <Earth />
        </Canvas>
      </div>
      <div className={styles.HomePage}>
        <h1>HomePage</h1>
      </div>
    </div>  
  );
}