import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) =>
{
    return (
        <div>
            <h1 className="PostHead"> {title} </h1>
            <div>
                {posts.map( (post, index) => 
                <PostItem number = {index + 1} key={post.id.toString()} post = {post}/>)}
            </div>
        </div>
    )
}

export default PostList;