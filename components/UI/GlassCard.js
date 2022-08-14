import classes from "./GlassCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {IoIosRocket} from "react-icons/io";

const GlassCard = (props) => {
  return (
      <div className={classes.card}>
        {props.children}
        <div className={classes.imgBx}>
          <Image src={props.image} alt="imageproject" />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <p> {props.description} </p>
          <div className={classes.actionbuttons}>
            <Link href={props.href} passHref>
              <a target="_blank">
              <button><IoIosRocket className={classes.reacticons}/> Website</button>
              </a>
            </Link>
            <Link href={props.repository} passHref>
              <a target="_blank">
              <button><IoIosRocket className={classes.reacticons}/> Repo</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default GlassCard;
