import { IoCode, IoCodeSlash } from "react-icons/io5";
import iconClasses from "../components/Icons/ReactIcons.module.css";
import classes from "./Name.module.css";

const Name = () => {
  return (
    <div className={classes.mainContainer}>
      <h1>
        <IoCode className={iconClasses.reacticons} /> Roberto Cisneros, React
        Dev <IoCodeSlash className={iconClasses.reacticons} />
      </h1>
    </div>
  );
};
export default Name;
