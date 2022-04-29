import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/robcisneros"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made it by Roberto Cisneros
        <span className={styles.logo}></span>
      </a>
    </footer>
  );
};
export default Footer;
