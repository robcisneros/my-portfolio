import Head from "next/head";
import Footer from "../components/layout/Footer";
import GlassCard from "../components/UI/GlassCard";
import styles from "../styles/Home.module.css";
import ProjectsData from "../components/ProjectsData";
import Name from "../components/Name";

import imageProject1 from "../assets/p1-vaccination.png";
import imageProject2 from "../assets/p2-pokedex.png";
import imageProject3 from "../assets/p3-hidden-pages.png";
import imageProject4 from "../assets/p4-expenses.png";
import imageProject5 from "../assets/p5-ecommerce.png";
import imageProject6 from "../assets/p6-database.png";

export default function Home() {
  const HardData = ProjectsData;
  const projectImages = [imageProject1, imageProject2, imageProject3, imageProject4, imageProject5, imageProject6];

  let content = <p>Found no projects.</p>;
  
  content = HardData.map((project, index) => {
    return (
      <GlassCard
        key={project.id}
        id={index + 1}
        title={project.title}
        description={project.description}
        href={project.href}
        image={projectImages[index]}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Roberto Cisneros React Dev</title>
        <meta name="description" content="Roberto Cisneros portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Name />
        <div className={styles.grid}>{content}</div>
      </main>
      <Footer />
    </div>
  );
}
