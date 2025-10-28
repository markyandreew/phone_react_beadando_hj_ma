import React, { useState } from "react";
import styles from "./Devices.module.css";
import FirstDevice from "./DevicesInfo/FirstDevice";

import { Navigate, useNavigate } from "react-router-dom";



//képek
import device1 from "../../assets/devices2_1.jpg"



const Device: React.FC = () => {
    const navigate=useNavigate();

    
  return (
    <div className={styles.divContainer}>

        
        <div className={styles.alapDiv} onClick={() => navigate("/devices/first")}>


        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>iPhone 15 React</h2>
          <p className={styles.devidePtag}>165 000 Ft</p>
          </div>


        </div>

        


    </div>
    
  );
};

export default Device;