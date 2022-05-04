import { Fragment } from "react";
import Contact from "../../components/contact/Contact";
import styles from "../../styles/Home.module.css";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

function ContactPage() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
}
export default ContactPage;
