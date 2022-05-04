import { Fragment } from "react";

import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Skills from "../../components/skills/Skills";

import styles from "../../styles/Home.module.css";

function SkillsPage() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Skills />
      </main>
      <Footer />
    </Fragment>
  );
}
export default SkillsPage;