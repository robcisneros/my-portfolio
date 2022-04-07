import classes from "./GlassCard.module.css";
import Link from "next/link";
import Image from "next/image";
import minions from "../../assets/minions.gif";

const GlassCard = (props) => {
  return (
    <Link href={props.href} passHref>
      <a target="_blank" className={classes.card}>
        {props.children}
        
        <h2>{props.title}</h2>
        <p> {props.description} </p>

        {/* <Image
          className={classes.landingImage}
          src={minions}
          alt="Minions parade"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
         */}
      </a>
    </Link>
  );
};

export default GlassCard;
