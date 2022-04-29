import { Fragment } from "react";
import Contact from "../../components/contact/Contact";
import styles from "../../styles/Home.module.css";

function ContactPage() {
  return (
    <Fragment>
      <main className={styles.main}>
        <Contact />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made it by Roberto Cisneros
          <span className={styles.logo}></span>
        </a>
      </footer>

    </Fragment>
  );
}
export default ContactPage;
