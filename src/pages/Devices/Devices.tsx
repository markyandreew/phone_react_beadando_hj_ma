import React, { useState } from "react";
import styles from "./Devices.module.css";




//Devices
import FirstDevice from "./DevicesInfo/FirstDevice";
import SecDevice from "./DevicesInfo/SecDevice";

import { Navigate, useNavigate } from "react-router-dom";

//képek
import device1 from "../../assets/devices2_1.jpg";
import device2 from "../../assets/device2.jpg";
import device3 from "../../assets/device3.jpg"; 
import device4 from "../../assets/device4.jpg"
import device5 from "../../assets/device5.jpg"
import device6 from "../../assets/device6.jpg"


const Device: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.divContainer}>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone 1</h2>
          <p className={styles.devidePtag}>150 000 Ft</p>
        </div>
      </div>




      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/second")}
      >
        <img src={device2} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone 2</h2>
          <p className={styles.devidePtag}>250 000 Ft</p>
        </div>
      </div>  



      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/third")}
      >
        <img src={device3} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone 3</h2>
          <p className={styles.devidePtag}>350 000 Ft</p>
        </div>
      </div>  



       <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/fourth")}
      >
        <img src={device4} alt="" />
        <div>
          <h2 className={styles.deviceh2}>Redmi React pro</h2>
          <p className={styles.devidePtag}>290 000 Ft</p>
        </div>
      </div>  



      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/fifth")}
      >
        <img src={device5} alt="" />
        <div>
          <h2 className={styles.deviceh2}>Samsung React</h2>
          <p className={styles.devidePtag}>310 000 Ft</p>
        </div>
      </div>  



      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/sixth")}
      >
        <img src={device6} alt="" />
        <div>
          <h2 className={styles.deviceh2}>Realme React 14 pro+</h2>
          <p className={styles.devidePtag}>150 000 Ft</p>
        </div>
      </div>  






    </div>













    
  );
};

export default Device;
