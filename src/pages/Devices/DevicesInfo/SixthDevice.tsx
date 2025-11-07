import React, { useState } from "react";




import styles from "../Devices.module.css";



//ez kell h kattintás eseményt hozz létre
import { useNavigate } from "react-router-dom";

//képek

import device1 from "../../../assets/device6Front.jpg"
import device2 from "../../../assets/device6Side.jpg"


import {UseKosar} from "../../../Kosar/KosarContext"







const SixthDevice: React.FC = () => {

    const visszaGomb=useNavigate();
    const [currentImg,setCurrentImg]=useState(device1);



    //kosár!!
    const {hozzadKosarhoz} = UseKosar();

    const KosarbaHelyez=()=>{
      hozzadKosarhoz({
        nev: "Realme React 14 pro+",
        ar: 150000,
      });
      console.log("a termek a kosarba")
    };
    


  

  return (
  <div>
    <button className={styles.visszaButton} onClick={() => visszaGomb("/Devices")}>vissza</button>
    
    
    
    <div className={styles.infoDeviceContainer}>
      
  {/* bal oszlop: nagy és kis képek */}
  <div className={styles.balOldal}>
    <header className={styles.infoHeader}>Realme React 14 pro+</header>
    
    <div className={styles.nagyKepContainer}>
      <img src={currentImg} alt="Nagy kep" />
    </div>
    <div className={styles.kisKepContainer}>
      <img src={device1} alt="device1" onClick={() => setCurrentImg(device1)} />
      <img src={device2} alt="device2" onClick={() => setCurrentImg(device2)} />
    </div>
  </div>

  {/* jobb oszlop: szöveg */}
  <section className={styles.infosection}>
    infok Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse enim vel ad expedita tempora cupiditate repellat. Voluptas, exercitationem. A aut facilis consequuntur laudantium mollitia eveniet iure ex inventore maiores!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa quos alias deserunt quibusdam reprehenderit rem fugit laboriosam voluptas repellendus ducimus, nam odit illum in commodi voluptate, molestiae tempore neque.
    <br />
    <br />
    <br />
    <p className={styles.arCimke}>150 000 Ft</p>
    
  </section>
  
  <button className={styles.kosarbaButton} onClick={KosarbaHelyez} >kosárba</button>
  
</div>


    </div>
        
    )
  ;
};

export default SixthDevice;
