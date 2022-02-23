import React from "react";
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const PostList = ({posts, title, remove}) =>
{

    if(!posts.length)
    {
        return (
            <div className="PostNF"> POSTS NOT FINDED </div>
        )
    }

    return (

        
        <div>
            <h1 className="PostHead"> {title} </h1>
            <TransitionGroup> 

                {posts.map(
                        (post, index) => 
                            <CSSTransition
                                key={post.id}
                                timeout={500}
                                classNames="post"
                            >
                                <PostItem number = {index + 1} post = {post} remove={remove}  />
                            </CSSTransition>
                    )
                }   
            </TransitionGroup> 
        </div>
    )
}

export default PostList;