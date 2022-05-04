import { Fragment } from "react";
import classes from "./About.module.css";
import Image from "next/image";
import profilePic from "../../assets/profilepp.jpeg";
import ButtonPDF from "../buttonPDF/ButtonPDF";

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
        <p>I studied biomedical engineer at Instituto Politécnico Nacional in Mexico City. 
            I studied electronics engineer for six months abroad at Universidad Rey Juan Carlos in Madrid Spain.
            Now, I&apos;m taking NodeJS course to improve my backend skills and continue learning tech. </p>
        <p>
          The aim of the projects I made is to merge my knowledge on medical
          service engineer with programming solutions based on my working
          experience on hospital field.
        </p>
        <p>
          I would like to be part of the medical&apos;s field transition into digital platforms,
          developing useful and friendly apps that contribute to improve
          healthcare.
        </p>
        <p>
          Most of my projects are made using React library and NextJS framework,
          that way I achieve a multipage application scence.
        </p>
        <p>
          On backend side, I use both relational and non-relational databases,
          NodeJS and Express for building server.
        </p>
        <p>
          Databases are hosted on free clouds like Clever Cloud, Firebase and
          MongoDB Atlas.
        </p>
        <p>Happy hacking!</p>
      </div>
      <ButtonPDF />
    </Fragment>
  );
};

export default About;
