
import Footer from "../../components/layout/Footer";
import About from "../../components/about/About";

import styles from "../../styles/Home.module.css";
import Header from "../../components/layout/Header";

function AboutPage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <About />
      </main>
      <Footer />
    </div>
  );
}
export default AboutPage;