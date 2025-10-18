import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Főoldal</h1>
      <p>Ez a Home oldal tartalma</p>
    </div>
  );
};

export default Home;