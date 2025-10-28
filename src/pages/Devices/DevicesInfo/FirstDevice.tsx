import React, { useState } from "react";


import styles from "../Devices.module.css";



//ez kell h kattintás eseményt hozz létre
import { useNavigate } from "react-router-dom";

//képek

import device1 from "../../../assets/devices2_1.jpg"
import device2 from "../../../assets/devices2_2.jpg"







const FirstDevice: React.FC = () => {

    const visszaGomb=useNavigate();
    const [currentImg,setCurrentImg]=useState(device1);
  return (
  <div>
    <button className={styles.visszaButton} onClick={() => visszaGomb("/Devices")}>vissza</button>
    
    <header>Iphone 15 pro</header>
    
    <div className={styles.infoDeviceContainer}>
  {/* bal oszlop: nagy és kis képek */}
  <div className={styles.balOldal}>
    <div className={styles.nagyKepContainer}>
      <img src={currentImg} alt="Nagy kep" />
    </div>
    <div className={styles.kisKepContainer}>
      <img src={device1} alt="device1" onClick={() => setCurrentImg(device1)} />
      <img src={device2} alt="device2" onClick={() => setCurrentImg(device2)} />
    </div>
  </div>

  {/* jobb oszlop: szöveg */}
  <section>
    infok Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse enim vel ad expedita tempora cupiditate repellat. Voluptas, exercitationem. A aut facilis consequuntur laudantium mollitia eveniet iure ex inventore maiores!
  </section>
  <button className={styles.visszaButton}>kosárba</button>
</div>


    </div>
        
    )
  ;
};

export default FirstDevice;
