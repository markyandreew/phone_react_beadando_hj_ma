
import React, {useState} from "react";
import { UseKosar } from "../../Kosar/KosarContext";
import { url } from "inspector";

import styles from "./Payment.module.css"



const Payment:React.FC=()=>{
    const {kosarElemek}=UseKosar();
    const osszeg=kosarElemek.reduce((osszeg,elem)=>osszeg+elem.ar,0)


    const [nev,setNev]=useState("");
    const [email, setEmail]=useState("");
    const [cim,setCim]=useState("");
    const [bankKartya,setBankKartya]=useState("")

    //mindig kell ha urlapot toltesz ki! 
    const urlap=(esemeny:React.FormEvent) =>{
        esemeny.preventDefault();
        console.log({nev,email,cim,osszeg,bankKartya, Termek:kosarElemek})
    }

    return(
        <div className={styles.paymentDiv}>
            <div className={styles.paymentBox} >
            <h1>Kérjük töltse ki az alábbi mezőket</h1>


            <form className={styles.form} onSubmit={urlap} >
                <label className={styles.labelText}>
                    Név
                    <input className={styles.inputField} value={nev} onChange={(esemeny) =>setNev(esemeny.target.value)} required/>
                </label>

                <label className={styles.labelText} >
                    Email
                    <input  className={styles.inputField} value={email} onChange={(esemeny) => setEmail(esemeny.target.value)} required />
                </label>

                <label className={styles.labelText}>
                    cim
                    <input className={styles.inputField}  value={cim} onChange={(esemeny)=> setCim(esemeny.target.value)} required/>
                </label>

                <label className={styles.labelText}>
                    Bankártya szám
                    <input className={styles.inputField} type="number" value={bankKartya} onChange={(esemeny) => setBankKartya(esemeny.target.value)} required  placeholder="0000-0000-0000-0000"/>
                </label>
                <button  className={styles.fizetesButton} disabled={osszeg === 0} type="submit">Fizetés</button>

            </form>

            <p className={styles.osszegText}>Fizetendő összeg: {osszeg} Ft</p>
            

            </div>




        </div>
    )
}

export default Payment;