import React, { useState } from "react";
import styles from "./Devices.module.css";
import FirstDevice from "./DevicesInfo/FirstDevice";

import { Navigate, useNavigate } from "react-router-dom";

//képek
import device1 from "../../assets/devices2_1.jpg";

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
          <h2 className={styles.deviceh2}>React Phone 3</h2>
          <p className={styles.devidePtag}>230 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone 2</h2>
          <p className={styles.devidePtag}>170 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone Pro</h2>
          <p className={styles.devidePtag}>280 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone Ultra</h2>
          <p className={styles.devidePtag}>300 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone 1</h2>
          <p className={styles.devidePtag}>165 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone Pro Max</h2>
          <p className={styles.devidePtag}>400 000 Ft</p>
        </div>
      </div>
      <div
        className={styles.alapDiv}
        onClick={() => navigate("/devices/first")}
      >
        <img src={device1} alt="" />
        <div>
          <h2 className={styles.deviceh2}>React Phone Pro Ultra</h2>
          <p className={styles.devidePtag}>500 000 Ft</p>
        </div>
      </div>
      
    </div>
    
  );
};

export default Device;
