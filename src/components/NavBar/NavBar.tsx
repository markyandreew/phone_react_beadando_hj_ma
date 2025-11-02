import React from "react";
import styles from "./NavBar.module.css";

import logo from "../../logo.svg";
import { Link, useNavigate } from "react-router-dom";

// Kosar
import KosarMenu from "../../Kosar/KosarMenu"


const NavBar: React.FC = () => {
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
        {/* 🔹 Logo */}
        <div className={styles.logo}>
          <Link to="/home">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </Link>
        </div>

        {/*  Menu */}
        <div className={styles.desktopMenu}>
          {navItems.map((item) => (
            <Link key={item.name} to={item.to} className={styles.menuLink}>
              {item.name}
            </Link>
          ))}

          <button
            className={styles.ctaButton}
            onClick={() => navigate("/devices")}
          >
            Termékeink
          </button>

          {/*Kosar */}
          <KosarMenu/>
          
        </div>

        
      </div>
    </nav>
  );
};

export default NavBar;