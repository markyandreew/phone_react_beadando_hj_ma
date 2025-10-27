import React from "react";
import styles from "./Devices.module.css";
import FirstDevice from "./DevicesInfo/FirstDevice";

import { Navigate, useNavigate } from "react-router-dom";


//képek
import device1 from "../../assets/devices2_1.jpg"



const Device: React.FC = () => {
    const navigate=useNavigate();
  return (
    <div className={styles.divContainer}>

        
        <div className={styles.alapDiv}
        //ezzel tudsz átnavigalni
        onClick={() => navigate("/devices/first")}
        >
        <img src={device1} alt="" />
        <p className={styles.devicePtag}>iPhone 15 React</p>
        </div>

        <div className={styles.alapDiv}>
        <p>egy kép</p>
        <p className={styles.devicePtag}>alatta tipus</p>
        </div>


        
        <div className={styles.alapDiv}>
        <p>egy kép</p>
        <p className={styles.devicePtag}>alatta tipus</p>
        </div>


        
        <div className={styles.alapDiv}>
        <p>egy kép</p>
        <p className={styles.devicePtag}>alatta tipus</p>
        </div>


        
        <div className={styles.alapDiv}>
        <p>egy kép</p>
        <p className={styles.devicePtag}>alatta tipus</p>
        </div>


        
        <div className={styles.alapDiv}>
        <p>egy kép</p>
        <p className={styles.devicePtag}>alatta tipus</p>
        </div>


    </div>
    
  );
};

export default Device;