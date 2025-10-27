import styles from "../Footer/Footer.module.css"

const Footer = () => {
  const footerItems = [
    <a href="/privacy">Adatvédelmi nyilatkozat</a>,
    <a href="/terms">Felhasználási feltételek</a>,
    <a href="/contact">Kapcsolat</a>
  ];
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2025 Minden jog fenntartva.</p>
          <p>Készítette: Horváth Jennifer, Márki András</p>
          <ul>
            {footerItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </footer>  
    );
}

export default Footer;