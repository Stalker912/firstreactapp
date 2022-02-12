import React from "react";
import classes from "./InputButton.module.css";


const InputButton = ({children, ...props}) =>
{
    return(
        <button {...props} className={classes.inpBtn}>
            {children}
        </button>
    )    
}

export default InputButton;