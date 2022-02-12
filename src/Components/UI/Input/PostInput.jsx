import React from "react"
import classes from "./PostInput.module.css"

const PostInput = React.forwardRef((props, ref) =>
{
    return(
        <input ref ={ref}className={classes.PostInp} {...props} />
    )
})

export default PostInput;