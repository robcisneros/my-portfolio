import {IoCode, IoCodeSlash} from "react-icons/io5"
import iconClasses from "../components/Icons/ReactIcons.module.css"
const Name = () => {
    return(
        <h1><IoCode className={iconClasses.reacticons} /> Roberto Cisneros, React Dev <IoCodeSlash className={iconClasses.reacticons}/></h1>
    )
}
export default Name