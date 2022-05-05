import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
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
import imageProject7 from "../assets/p7-taskconcat.png";
import imageProject8 from "../assets/p8-getpostmovies.png";
import imageProject9 from "../assets/p9-filteredUsers.png";

export default function Home() {
  const HardData = ProjectsData;
  const projectImages = [
    imageProject1,
    imageProject2,
    imageProject3,
    imageProject4,
    imageProject5,
    imageProject6,
    imageProject7,
    imageProject8,
    imageProject9
  ];

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
      <Header />
      <main className={styles.main}>
        <Name />
        <div className={styles.grid}>{content}</div>
      </main>
      <Footer />
    </div>
  );
}
