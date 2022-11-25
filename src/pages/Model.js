import React from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./041-nanoplanet";
import { OrbitControls } from "@react-three/drei";
import backgroundVideo from "../assets/video.mp4";
import { Helmet } from "react-helmet";
import logo from "../assets/logo.png";
import styles from "./Model.module.css";
import { useNavigate } from "react-router";

export default function Model() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/Home");
  };

  return (
    <>
      <Helmet>
        <title>Green Lives</title>
      </Helmet>
      <div className={styles.Canvascontainer}>
        <video autoPlay muted loop playsInline className={styles.VideoBG}>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className={styles.glass}>
          <div className={styles.canvas}>
            <Canvas>
              <OrbitControls enableZoom={false} enableRotate={false} />
              <directionalLight intensity={1} />
              <ambientLight intensity={0.5} />

              <Earth />
            </Canvas>
          </div>
        </div>
        <div className={styles.HomePage}>
          <h1 id={styles.Title}>
            <img width={50} src={logo} alt="Logo" />
            &nbsp;Green Lives
          </h1>
          <button id={styles.StartButton} onClick={navigateToHome}>
            Start
          </button>
        </div>
      </div>
    </>
  );
}
