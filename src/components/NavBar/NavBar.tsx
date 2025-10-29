import React , {useState} from "react";
import styles from "./NavBar.module.css";


import logo from "../../logo.svg"
import { Link, useNavigate, } from "react-router-dom";



const NavBar: React.FC = () => {


  const [showCart,setShowCart]=useState(false)


  const navItems = [
    { name: "Kezdőlap", to: "/home" },
    { name: "Szolgáltatások", to: "/services" },
    { name: "Rólunk", to: "/about" },
    { name: "Kapcsolat", to: "/contact" },
  ];

const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <Link to="/home">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>

        <div className={styles.desktopMenu}>
          {navItems.map((item) => (
            <Link key={item.name} to={item.to} className={styles.menuLink}>
              {item.name}
            </Link>
          ))}
            <button className={styles.ctaButton} onClick={() => navigate("/devices")}>Termékeink</button>
        </div>



        {/*KOSÁR*/}
        <div className={styles.cartIcon} onClick={()=> setShowCart(!showCart)}></div>
        
        {/*Legordulo Menu*/}
        {showCart && (
          <div className={styles.cartDropdown}>
            <p>termek1</p>
            <p>termek2</p>
            <button className={styles.rendelesButton}>rendelés</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
