import React from "react";
import Inpbutton from "./UI/Button/InputButton"

const PostItem = ({number, post, deletePost, ...props}) =>
{
    return(
        <div className="Post">
            <div className="PostContent">
                <strong> {number}. {post.title} </strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="PostBtns">
                <Inpbutton onClick={() => deletePost(post)}>Delete</Inpbutton>
            </div>
      </div>
    )
}

export default PostItem;