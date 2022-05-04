
import Footer from "../../components/layout/Footer";
import About from "../../components/about/About";

import styles from "../../styles/Home.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <About />
      </main>
      <Footer />
    </div>
  );
}
export default AboutPage;