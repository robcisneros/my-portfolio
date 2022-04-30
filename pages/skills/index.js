import { Fragment } from "react";
import Footer from "../../components/layout/Footer";
import Skills from "../../components/skills/Skills";

import styles from "../../styles/Home.module.css";

function SkillsPage() {
  return (
    <Fragment>
      <main className={styles.main}>
        <Skills />
      </main>
      <Footer />
    </Fragment>
  );
}
export default SkillsPage;