import { Fragment } from "react";
import classes from "./About.module.css";
import Image from "next/image";
import profilePic from "../../assets/profilepp.jpeg";

const About = () => {
  return (
    <Fragment>
      <h1>About me</h1>
      <div className={classes.imgContainer}>
        <Image src={profilePic} alt="profile-image" />
      </div>
      <div className={classes.content}>
        <h2>
          I&apos;m Roberto Cisneros, Web Developer and Biomedical Engineer.
        </h2>
        <p>
          I am a javascript full stack developer with experience building web
          applications.
        </p>
        <p>I studied biomedical engineer at Instituto Politécnico Nacional, Mexico City. 
            I studied electronic engineer for six months abroad at Universidad Rey Juan Carlos, Madrid Spain.
            Now, I&apos;m taking NodeJS course to improve my backend skills and stay learning IT. </p>
        <p>
          The aim of the projects I made are merge my knowledge on medical
          service engineer with programming solutions based on my working
          experience on hospital field.
        </p>
        <p>
          I would like to be part of the medical transition into digital world,
          developing useful and firendly apps that contribute to improve
          healthcares.
        </p>
        <p>
          Most of my projects are made using React library and NextJS framework,
          that way I achieve a multipage application scence.
        </p>
        <p>
          On backend side, I use both relational and non-relational database,
          NodeJS and express for building server.
        </p>
        <p>
          Databases are hosted on free clouds like Clever Cloud, Firebase and
          MongoDB Atlas.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
