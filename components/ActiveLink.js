import { useRouter } from "next/router";
import classes from "./ActiveLink.module.css";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  let isActive = false;

  if (router.asPath === href) {
    isActive = true;
  } else {
    isActive = false;
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`${classes.mylink} ${isActive && classes.isCurrentActive} `} >
      {children}
    </a>
  );
};

export default ActiveLink;
