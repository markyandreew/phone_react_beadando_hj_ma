import React from "react";
import styles from "./Home.module.css";
import placeholderImage from "../../assets/Lovepik_com-401773976-rhino-modeling-phone-p40-removebg-preview.png";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
        <h1>React Telefonok <br />széles választéka</h1>
        <p>
          Fedezd fel a legújabb React alapú mobil élményt. <br />Gyors, modern és
          intuitív, hogy mindig kéznél legyen, <br />amire szükséged van. React
          Telefonok, a technológia, <br />ami követi a ritmusodat.
        </p>
        <button className={styles.homeButton}>Fedezd fel</button>
      </div>
      <div className={styles.homeImage}>
        <img src={placeholderImage} alt="React Telefonok" />
      </div>
    </div>
  );
};

export default Home;
