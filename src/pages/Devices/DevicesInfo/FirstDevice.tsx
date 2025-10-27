import React from "react";


import styles from "../Devices.module.css";



//ez kell h kattintás eseményt hozz létre
import { useNavigate } from "react-router-dom";







const FirstDevice: React.FC = () => {

    const visszaGomb=useNavigate();
  return (
  <div>

    <p className={styles.nekem}>Adatok a készülékről...</p>
    <button className={styles.visszaButton} onClick={() => visszaGomb("/Devices")}>vissza</button>

    </div>
        
    )
  ;
};

export default FirstDevice;
