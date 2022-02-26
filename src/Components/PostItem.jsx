import React from "react";
import StButton from "./UI/Button/InputButton"

const PostItem = ({number, post, remove, ...props}) =>
{
    return(
        <div className="Post">
            <div className="PostContent">
                <strong> {post.id}. {post.title} </strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="PostBtns">
                <StButton onClick={() => remove(post)}>Delete</StButton>
            </div>
      </div>
    )
}

export default PostItem;