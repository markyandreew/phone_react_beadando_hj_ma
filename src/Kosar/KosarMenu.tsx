


import React, { useState, useRef, useEffect } from "react";
import styles from "./KosarMenu.module.css"

import { UseKosar } from "./KosarContext";



const KosarMenu: React.FC = () => {
  const [nyitva, setnyitva] = useState(false);
  const { kosarElemek, torolElem } = UseKosar();
  const kosarRef = useRef<HTMLDivElement>(null);

  const osszeg = kosarElemek.reduce((ossz, elem) => ossz + elem.ar, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kosarRef.current && !kosarRef.current.contains(event.target as Node)) {
        setnyitva(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.kosarWrapper} ref={kosarRef}>
      <button className={styles.kosarGomb} onClick={() => setnyitva(!nyitva)}>
        Kosár
      </button>

      {nyitva && (
        <div className={styles.kosarDropdown}>
          <h2 className={styles.kosarTartalmah2}>Kosár tartalma:</h2>
          {kosarElemek.length === 0 ? (
            <p>A kosár üres</p>
          ) : (
            <ul className={styles.kosarUlLi}>
              {kosarElemek.map((elem, index) => (
                <li key={index}>
                  {elem.nev} - {elem.ar} Ft
                  <button
                    className={styles.toromElem}
                    onClick={() => torolElem(index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}

          <p className={styles.osszeg}>Összeg: {osszeg} Ft</p>

          <button>Tovább a pénztárhoz</button>
        </div>
      )}
    </div>
  );
};

export default KosarMenu;