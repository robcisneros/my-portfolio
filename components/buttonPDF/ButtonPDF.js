import classes from "./ButtonPDF.module.css"

//.pdf application/pdf or .bin appliacation/octet-stream

const ButtonPDF = () =>{
    return(
        <a
        className={classes.btnCV}
        download="robcisnerosCV.pdf"
        href="../../assets/myCV.pdf"
        >Download CV
        </a>
    )
}

export default ButtonPDF