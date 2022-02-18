import React, { useMemo } from "react"
import PostInput from "./UI/Input/PostInput"
import Selector from "./UI/Select/Selector"

const PostsFilter = ({filter, setFilter}) =>
{
    return(
        <div>
            <PostInput 
                type="text" 
                placeholder="Post find"
                value = {filter.query}
                onChange={query => setFilter({...filter, query: query.target.value})}
            />
            <Selector
                defaultValue={"Sort by"}
                options={[{value:"title",name:"Sort by title"}, {value:"body",name:"Sort by content"}]}
                value={filter.sort}
                onChange={value =>setFilter({...filter, sort:value})}
            />
        </div>
    )
}

export default PostsFilter