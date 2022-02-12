import React from "react";

const PostItem = (props) =>
{
    return(
        <div className="Post">
            <div className="PostContent">
                <strong> {props.number}. {props.post.title} </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="PostBtns">
                <button>Удалить</button>
            </div>
      </div>
    )
}

export default PostItem;