import React from "react";
import styles from "./Home.module.css";
import placeholderImage from "../../assets/Lovepik_com-401773976-rhino-modeling-phone-p40-removebg-preview.png";


import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const fedezdFelDevices=useNavigate();


  return (
    <>
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
        <h1>React Telefonok <br />széles választéka</h1>
        <p>
          Fedezd fel a legújabb React alapú mobil élményt. <br />Gyors, modern és
          intuitív, hogy mindig kéznél legyen, <br />amire szükséged van. React
          Telefonok, a technológia, <br />ami követi a ritmusodat.
        </p>
        <button onClick={() => fedezdFelDevices("/Devices")} className={styles.homeButton}>Fedezd fel</button>
      </div>
      <div className={styles.homeImage}>
        <img src={placeholderImage} alt="React Telefonok" />
      </div>
    </div>

    <section className={styles.homeSection1}>
      <h2>Miért válaszd a React Telefonokat?</h2>
      <ul>
        <li>Gyors és zökkenőmentes teljesítmény</li>
        <li>Modern dizájn és felhasználói élmény</li>
        <li>Széleskörű alkalmazás támogatás</li>
      </ul>
    </section>
    </>
  );
};

export default Home;
