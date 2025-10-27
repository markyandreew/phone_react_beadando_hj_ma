import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../logo.svg"
import { href } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { name: "Kezdőlap", href: "#" },
    { name: "Szolgáltatások", href: "#services" },
    { name: "Rólunk", href: "#about" },
    { name: "Kapcsolat", href: "#contact" },
  ];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <a href="/home">
            <img src={logo} alt="Logo" className={styles.logoImage} />
          </a>
        </div>

        <div className={styles.desktopMenu}>
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className={styles.menuLink}>
              {item.name}
            </a>
          ))}
          <button className={styles.ctaButton}>Termékeink</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
