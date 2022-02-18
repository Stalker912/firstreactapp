import React from 'react'
import style from "./PostCreateWindow.module.css"

const PostCreateWindow = ({children, visible, setVisible}) => {

    const mainClass = [style.PostCreate]

    if(visible)
    {
        mainClass.push(style.active)
    }


  return (
    <div className={ mainClass.join(' ')} onClick={() => setVisible(false)}>
        <div className={style.PostCreateContent} onClick ={(a)=>a.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default PostCreateWindow