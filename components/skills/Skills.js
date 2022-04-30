import { Fragment } from "react";
import classes from "./skills.module.css";

import reactlogo from "../../assets/react.png";
import reduxlogo from "../../assets/redux.png";
import mongodblogo from "../../assets/mongodb.png";
import expresslogo from "../../assets/express.png";
import firebaselogo from "../../assets/firebase.png";
import githublogo from "../../assets/github.png";
import mysqllogo from "../../assets/mysql.png";
import vuejslogo from "../../assets/vuejs.png";
import nodejslogo from "../../assets/nodejs.svg";
import nextjslogo from "../../assets/nextjs.png";
import jslogo from "../../assets/js.png";
import matlablogo from "../../assets/matlab.png";
import bootstraplogo from "../../assets/bootstrap.png";

import Image from "next/image";

const Skills = () => {
  return (
    <Fragment>
      <h1> Skills!</h1>
      <div className={classes.container}>
        <div className={classes.imgcontainer}>
          <Image src={reactlogo} alt="react" width={60} height={60} />
          <div>React</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={reduxlogo} alt="redux" width={60} height={60} />
          <div>Redux</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={bootstraplogo} alt="bootstrap" width={60} height={60} />
          <div>Bootstrap</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={expresslogo} alt="express" width={60} height={60} />
          <div>Express</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={mongodblogo} alt="mongodb" width={60} height={60} />
          <div>MongoDB</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={matlablogo} alt="matlab" width={60} height={60} />
          <div>Matlab</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={mysqllogo} alt="mysql" width={60} height={60} />
          <div>MySQL</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={githublogo} alt="github" width={60} height={60} />
          <div>Github</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={jslogo} alt="js" width={60} height={60} />
          <div>JavaScript</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={firebaselogo} alt="firebase" width={60} height={60} />
          <div>Firebase</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={vuejslogo} alt="vuejs" width={60} height={60} />
          <div>VueJS</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={nextjslogo} alt="nextjs" width={60} height={60} />
          <div>NextJS</div>
        </div>

        <div className={classes.imgcontainer}>
        <Image src={nodejslogo} alt="nodejs" width={60} height={60} />
          <div>NodeJS</div>
        </div>

      </div>
    </Fragment>
  );
};
export default Skills;
