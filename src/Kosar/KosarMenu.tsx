


import React, { useState } from "react";
import styles from "./KosarMenu.module.css"

import { UseKosar } from "./KosarContext";



const KosarMenu:React.FC=()=>{


    const [nyitva,setnyitva]=useState(false)
    const {kosarElemek, torolElem} =UseKosar();

    const osszeg=kosarElemek.reduce((ossz,elem) => ossz+elem.ar, 0)

    return(
        <div className={styles.kosarWrapper}>
            <button className={styles.kosarGomb}  onClick={() => setnyitva (!nyitva)}>
            Kosar
        </button>

        {/*lenyiloMenu*/}
        {nyitva && (
            <div className={styles.kosarDropdown}>
                <h2 className={styles.kosarTartalmah2}>Kosár tartalma:</h2>
                {kosarElemek.length ===0 ?(
                    <p>a kosár üres</p>
                ): (
                    <ul className={styles.kosarUlLi}>
                        {kosarElemek.map((elem,index) =>
                        <li key={index}>
                            {elem.nev}-{elem.ar} Ft


                            <button className={styles.toromElem} onClick={() => torolElem(index)}>x</button>

                        </li>)}
                    </ul>
                )}



                <p className={styles.osszeg}>összeg: {osszeg} Ft </p>

                <button> Tovább a pénztárhoz</button>
            </div>
        )}

        </div>
        
    );
};



export default KosarMenu;