import React from "react";
import styles from "./Home.module.css";
import placeholderImage from "../../assets/Lovepik_com-401773976-rhino-modeling-phone-p40-removebg-preview.png";

import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const fedezdFelDevices = useNavigate();

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>
            React Telefonok <br />
            széles választéka
          </h1>
          <p>
            Fedezd fel a legújabb React alapú mobil élményt. <br />
            Gyors, modern és intuitív, hogy mindig kéznél legyen, <br />
            amire szükséged van. React Telefonok, a technológia, <br />
            ami követi a ritmusodat.
          </p>
          <button
            onClick={() => fedezdFelDevices("/Devices")}
            className={styles.homeButton}
          >
            Fedezd fel
          </button>
        </div>
        <div className={styles.homeImage}>
          <img src={placeholderImage} alt="React Telefonok" />
        </div>
      </div>

      <section className={styles.homeSection1}>
        <h2>Miért válaszd a React Telefonokat?</h2>
        <ul>
          <li>Gyors és zökkenőmentes teljesítmény</li>
          <li>Modern dizájn és felhasználói élmény</li>
          <li>Széleskörű alkalmazás támogatás</li>
        </ul>
      </section>

      <section className={styles.homeSection2}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresLeft}>
            <h3 className={styles.featuresTitle}>Tudj meg többet rólunk</h3>
            <p className={styles.featuresText}>
              A <strong>React Telefonok</strong> egy olyan bolt, ahol a legújabb
              okostelefonokat, kiegészítőket és tartozékokat találod — mindezt
              kedvező áron és szakértői segítséggel. Nálunk nemcsak készüléket
              vásárolsz, hanem valódi élményt is kapsz.
            </p>

            <Link to="/home" className="features-link">
              További információ
            </Link>
          </div>

          <div className={styles.featuresRight}>
            <div className={styles.featureItem}>
              <div className={styles.featureIconBox}>
                <span className="material-icons"></span>
              </div>
              <p className={styles.featureDescription}>
                Legújabb <strong>Apple</strong>, <strong>Samsung</strong> és{" "}
                <strong>Xiaomi</strong> modellek, akár azonnal készletről.
                Minden készülék <strong>gyári garanciával</strong>.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconBox}>
                <span className="material-icons"></span>
              </div>
              <p className={styles.featureDescription}>
                <strong>Szakértő csapatunk</strong> segít a megfelelő telefon
                kiválasztásában, beállításban és adatátvitelben is.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconBox}>
                <span className="material-icons"></span>
              </div>
              <p className={styles.featureDescription}>
                <strong>Gyors házhoz szállítás</strong> és személyes átvétel is
                elérhető. Vásárolj kényelmesen, biztonságosan a React
                Telefonoknál!
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.homeSection3}>
        <h2>Vásárlói vélemények</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
              "A React Telefonoknál vásároltam a legújabb készülékemet, és
              teljesen elégedett vagyok a szolgáltatással!"
            </p>
            <span className={styles.testimonialAuthor}>- Kovács Anna</span>
          </div>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
              "Gyors és megbízható, csak ajánlani tudom!"
            </p>
            <span className={styles.testimonialAuthor}>- Szabó Péter</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
