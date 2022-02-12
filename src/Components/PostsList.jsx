import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) =>
{
    return (
        <div>
            <h1 className="PostHead"> {title} </h1>
            <div>
                {posts.map( (post, index) => 
                <PostItem number = {index + 1} post = {post} deletePost ={deletePost}  key={post.id.toString()}/>)}
            </div>
        </div>
    )
}

export default PostList;