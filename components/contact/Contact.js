import { Fragment } from "react";
import classes from "./contact.module.css";
import { SiGithub } from "react-icons/si";
import {MdMailOutline} from "react-icons/md";
import {AiFillLinkedin} from "react-icons/ai"

const Contact = () => {
  return (
    <Fragment>
      <h1> CONTACT ME BY:</h1>
      <div className={classes.container}>
        <a 
          href="https://github.com/robcisneros"
          target="_blank"
          rel="noopener noreferrer">
          <div>
            <SiGithub className={classes.reacticons} />
          </div>
          <div>MY GITHUB</div>
        </a>
        <a>
          <div>
            <AiFillLinkedin className={classes.reacticons} />
          </div>
          <div>My Linked In</div>
        </a>
        <a>
          <div>
            <MdMailOutline className={classes.reacticons} />
          </div>
          <div>MY E-MAIL</div>
        </a>
      </div>
    </Fragment>
  );
};
export default Contact;
